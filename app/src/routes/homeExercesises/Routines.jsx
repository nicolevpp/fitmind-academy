import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, InputLabel, Modal, Select } from '@mui/material';
import Topbar from '../../components/Topbar';
import SidebarSection from '../../components/SidebarSection';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { tokens } from '../../theme';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';



export default function Routines(){

  const { auth } = useAuth();
  let isAdmin = auth.isAdmin;

  const [routines, setRoutines] = useState([]);
  const [users, setUsers] = useState([]);
  const [userToAssign, setUserToAssign] = useState([]);
  const [routineToAssign, setRoutineToAssign] = useState([]);
  // const [value, setValue] = useState(dayjs('2023-12-12'));
  // console.log(value.$y, value.$D, value.$M+1);

  console.log(routines);

  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

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
                <Accordion key={index}
                  onClick={() => {setRoutineToAssign(routine.id);}}
                  alignItems="center"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                      <Typography>{routine.name}</Typography>
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
                        </Menu>
                      </div>
                    </Box>

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
                  </AccordionSummary>
                  <AccordionDetails>
                    {routine.exercises.map((exercise, index) => {
                      return (
                        <Box key={index} marginBottom="1rem" gap="0.5rem" display="flex" flexDirection="column">
                          <Typography  textTransform="capitalize" variant="h3">{exercise.name}</Typography>
                          <Box display="flex" gap="0.5rem">
                            <AccessAlarmsIcon/>
                            <Typography>{exercise.rest} Descanso</Typography>
                          </Box>
                          <Box display="flex" gap="0.5rem">
                            <AccessibilityNewIcon/>
                            <Typography>{exercise.repetitions} Repeticiones</Typography>
                          </Box>
                        </Box>

                      );
                    })}
                  </AccordionDetails>
                </Accordion>
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
                  <Accordion key={index}
                    onClick={() => {setRoutineToAssign(routine.id);}}
                    alignItems="center"
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                    >
                      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                        <Typography>{routine.name}</Typography>
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

                        </div>
                      </Box>

                    </AccordionSummary>
                    <AccordionDetails>
                      {routine.exercises.map((exercise, index) => {
                        return (
                          <Box key={index} marginBottom="1rem" gap="0.5rem" display="flex" flexDirection="column">
                            <Typography  textTransform="capitalize" variant="h3">{exercise.name}</Typography>
                            <Box display="flex" gap="0.5rem">
                              <AccessAlarmsIcon/>
                              <Typography>{exercise.rest} Descanso</Typography>
                            </Box>
                            <Box display="flex" gap="0.5rem">
                              <AccessibilityNewIcon/>
                              <Typography>{exercise.repetitions} Repeticiones</Typography>
                            </Box>
                          </Box>

                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>

          </Box>
        }
      </Box>
    </Box>
  );
}


// <Box
// onClick={() => {setRoutineToAssign(routine.id);}}
// key={index}
// display="flex"
// justifyContent="space-between"
// p="1rem"
// mx="3rem"
// borderRadius="0.3rem"
// sx={{ backgroundColor: colors.primary[400] }} >
// <div display="flex">
//   <Typography color={colors.greenAccent[300]} variant="h4">{routine.name}</Typography>
//   <Typography>{routine.description}</Typography>
// </div>
// <div>
//   <IconButton
//     aria-label="more"
//     id="long-button"
//     aria-controls={open ? 'long-menu' : undefined}
//     aria-expanded={open ? 'true' : undefined}
//     aria-haspopup="true"
//     onClick={handleClick}
//   >
//     <MoreVertIcon />
//   </IconButton>
//   <Menu
//     id="long-menu"
//     MenuListProps={{
//       'aria-labelledby': 'long-button',
//     }}
//     anchorEl={anchorEl}
//     open={open}
//     onClose={handleClose}
//   >
//     <MenuItem
//       onClick={handleOpenModal}>
//       Asignar
//     </MenuItem>
//   </Menu>
// </div>
// <Modal
//   open={openModal}
//   onClose={handleCloseModal}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//   <Box sx={{ position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '80%',
//     bgcolor: 'background.paper',
//     borderRadius: '0.5rem',
//     boxShadow: 24,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     gap: '1rem',
//     p: 4, }}>
//     <Typography variant="h4" textAlign="center" p="1rem">Asignar rutina `{routine.name}`</Typography>
//     <FormControl fullWidth>
//       <InputLabel id="demo-simple-select-label">Seleccionar usuario</InputLabel>
//       <Select
//         onChange={handleUserSelection}
//         defaultValue={''}
//         variant="filled"
//         label="Usuarios"
//       >
//         {users.map((user,index) => {
//           return (
//             <MenuItem key={index} value={user.id}>{user.firstName} {user.lastName}</MenuItem>
//           );
//         })}
//       </Select>
//     </FormControl>
//     <Button
//       variant="contained"
//       color="secondary"
//       onClick={() => {submitRoutine(userToAssign, routineToAssign);}}
//     >Confirmar</Button>
//   </Box>
// </Modal>
// </Box>

{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          sx={{ width: '100%' }}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          label="Seleccionar una fecha" />
      </DemoContainer>
    </LocalizationProvider> */}