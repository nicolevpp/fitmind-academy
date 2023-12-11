import { Box, Button, FormControl, InputLabel, Modal, Select, useTheme } from '@mui/material';
import Topbar from '../../components/Topbar';
import SidebarSection from '../../components/SidebarSection';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { tokens } from '../../theme';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

export default function Routines(){

  const { auth } = useAuth();
  let isAdmin = auth.isAdmin;

  const [routines, setRoutines] = useState([]);
  const [users, setUsers] = useState([]);
  const [userToAssign, setUserToAssign] = useState([]);
  const [routineToAssign, setRoutineToAssign] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isAdmin) {
      axios.get('/api/routines').then((response) => {
        setRoutines(response.data);
      });
    } else {
      const userId = auth.userId;
      axios.get(`/api/users/${userId}`, userId ).then((response) => {
        setUsers(response.data);
      });
    }

  }, [auth.userId, isAdmin]);

  if (users.routines) {

    // users.routines.map((routine, i) =>
    //   axios.get(`/api/routines/${routine}`, routine, i ). then ((response) => {
    //     console.log(response.data);
    //   })
    // );
    const promises = users.routines.map((routine) =>
      axios.get(`/api/routines/${routine}`)
    );

    // Usar Promise.all para esperar a que todas las peticiones se completen
    Promise.all(promises).then((responses) => {
    // Crear un array con los datos de cada respuesta
      const results = responses.map((response) => response.data);
      setRoutines(results);
    }).catch((error) => {
      console.error('Error al realizar las peticiones: ', error);
    });
  }


  const handleUserSelection = (event) => {
    setUserToAssign(event.target.value);
  };

  const handleOpenModal = () => {
    axios.get('/api/users').then((response) => {
      setUsers(response.data);
    });
    setOpenModal(true);
  };


  const handleCloseModal = () => setOpenModal(false);

  const submitRoutine = async (userToAssign, routineToAssign) => {

    const dataToUpdate = {
      id: userToAssign,
      routines: routineToAssign,
    };


    await axios.patch('/api/routines', dataToUpdate )
      .then((response) => {
        console.log(response);
        toast.success('Rutina agregada con éxito');
        userToAssign([]);
        routineToAssign([]);
      })
      .catch((error) => {
        console.log(error);
      });

  };



  return (
    <Box display="flex">
      <SidebarSection/>
      <Box m="20px" width="100%">
        <Topbar/>
        {isAdmin? <Box display="flex" justifyContent="space-between"  flexDirection="column">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" px="2rem">
            <Header  title="RUTINAS" subtitle="Gestionar y asignar rutinas"/>
            <Link to={'/rutinas/crear'}>
              <Button variant="contained" color="secondary" sx={{ height: '80%' }}>Crear nueva rutina</Button>
            </Link>
          </Box>
          <Box display="flex" gap="1rem" flexDirection="column">
            {routines.map((routine, index) => {
              return (
                <Box
                  onClick={() => {setRoutineToAssign(routine.id);}}
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  p="1rem"
                  mx="3rem"
                  borderRadius="0.3rem"
                  sx={{ backgroundColor: colors.primary[400] }} >
                  <div display="flex">
                    <Typography color={colors.greenAccent[300]} variant="h4">{routine.name}</Typography>
                    <Typography>{routine.description}</Typography>
                  </div>
                  <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? 'long-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        'aria-labelledby': 'long-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={handleOpenModal}>
                        Asignar
                      </MenuItem>
                      <MenuItem>
                        Eliminar
                      </MenuItem>
                    </Menu>
                  </div>
                  <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={{ position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80%',
                      height: '50%',
                      bgcolor: 'background.paper',
                      borderRadius: '0.5rem',
                      boxShadow: 24,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '1rem',
                      p: 4, }}>
                      <Typography variant="h4" textAlign="center" p="1rem">Asignar rutina `{routine.name}`</Typography>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Seleccionar usuario</InputLabel>
                        <Select
                          onChange={handleUserSelection}
                          defaultValue={''}
                          variant="filled"
                          label="Usuarios"
                        >
                          {users.map((user,index) => {
                            return (
                              <MenuItem key={index} value={user.id}>{user.firstName} {user.lastName}</MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {submitRoutine(userToAssign, routineToAssign);}}
                      >Confirmar</Button>
                    </Box>
                  </Modal>
                </Box>
              );
            })}
          </Box>
        </Box> :
          <Box>
            <Box display="flex" justifyContent="space-between">
              <Header title="RUTINAS" subtitle="¡Es momento de ejercitarse!"/>
            </Box>
            <Box display="flex" gap="1rem" flexDirection="column">
              {routines.map((routine, index) => {
                return (
                  <Box
                    onClick={() => {setRoutineToAssign(routine.id);}}
                    key={index}
                    display="flex"
                    justifyContent="space-between"
                    p="1rem"
                    mx="3rem"
                    borderRadius="0.3rem"
                    sx={{ backgroundColor: colors.primary[400] }} >
                    <div display="flex">
                      <Typography color={colors.greenAccent[300]} variant="h4">{routine.name}</Typography>
                      <Typography>{routine.description}</Typography>
                    </div>
                    <div>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem
                          onClick={handleOpenModal}>
                        Asignar
                        </MenuItem>
                        <MenuItem>
                        Eliminar
                        </MenuItem>
                      </Menu>
                    </div>
                  </Box>
                );
              })}
            </Box>

          </Box>
        }
      </Box>
    </Box>
  );
}