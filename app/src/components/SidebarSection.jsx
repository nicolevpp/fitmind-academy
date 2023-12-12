import { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to}/>}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};


export default function SidebarSection(){
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const  [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const [user, setUser ] = useState({});

  const { auth } = useAuth();
  let isAdmin = auth.isAdmin;



  useEffect( ()  => {
    const userId = auth.userId;
    axios.get(`/api/users/${userId}`, userId ).then((response) => {
      setUser(response.data);
    });
  },[auth]);


  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important'
        },
        '& .pro-menu-item.active': {
          color: '#1f2a40 !important'
        }, '& .ps-collapsed': {
          height: '100vh',
        }, position: 'sticky !important', top: '0 !important' , height: '100vh',
        '& .ps-menuitem-root:hover': {
          backgroundColor: '#1f2a40 !important'
        }
      }}
    >
      <Sidebar collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        rootStyles={{ border:'none', height: '100vh' }}
        breakPoint="xs"
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
            style={{
              margin: '10px 0 10px 0'
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >

                <Typography variant="h3" fontWeight="bold" color={colors.redAccent[400]}>
                      FITMIND <FitnessCenterIcon/>
                </Typography>

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="10px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar sx={{ width: '4rem', height: '4rem' }} {...stringAvatar(`${user.firstName} ${user.lastName}`)} />
              </Box>

              <Box textAlign="center">
                <Typography px={1} variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ m: '5px 0 0 0' }}>{user.firstName} {user.lastName}</Typography>
                {isAdmin? <Typography px={1} variant="h5" color={colors.redAccent[500]}>Entrenador Personal</Typography> : <Typography px={1} variant="h5" color={colors.redAccent[500]}>Usuario de Fitmind</Typography>}

              </Box>
            </Box>
          )}
          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'} paddingTop={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Rutinas"
              to="/rutinas"
              icon={<SportsGymnasticsIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            {isAdmin? <><Item
              title="Gestionar equipo"
              to="/equipo"
              icon={<ContactsOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invitar usuario"
              to="/form"
              icon={<PersonOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            /></> : undefined}
            <Item
              title="Calendario"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              /> */}
            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px"}}
              >Charts</Typography>
              <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              /> */}

          </Box>
        </Menu>

      </Sidebar>

    </Box>
  );


}