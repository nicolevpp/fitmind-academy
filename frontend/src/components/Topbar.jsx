import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from '../theme'
// import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';



export default function Topbar(){

  // have access to the theme
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


    return (
      <Box display="flex" justifyContent="end" p={2} height="fit-content">
       

        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlinedIcon/>
            ) : (
              <LightModeOutlinedIcon/>
            )}
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon/>
          </IconButton>
        </Box>
      </Box> 
    )
}