import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Topbar from '../components/Topbar';
import SidebarSection from '../components/SidebarSection';
import Header from '../components/Header';
import { tokens } from '../theme';
// import { mockTransactions } from '../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

// Charts
import LineChart from '../components/LineChart';
import StatBox from '../components/StatBox';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';









export default function Dashboard(){

  const [users, setUsers] = useState([]);
  const [routines, setRoutines] = useState([]);
  const { auth } = useAuth();
  let isAdmin = auth.isAdmin;


  useEffect(() => {

    axios.get('/api/routines').then((response) => {
      setRoutines(response.data);
    });
  }, []);

  useEffect(() => {

    axios.get('/api/users').then((response) => {
      setUsers(response.data);    });
  }, []);



  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" overflow="clip">
      <SidebarSection/>
      <Box width="100%" p="30px" m="auto">
        <Topbar/>
        <Box display="flex" justifyContent="space-between" flexDirection="column">


          <Box display="flex" justifyContent="space-between">
            <Header title="DASHBOARD" subtitle="¡Bienvenido a tu dashboard!"/>
          </Box>

          {/* GRID & CHARTS */}
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
            {/* ROW 1 */}
            <Box gridColumn={isAdmin? 'span 6' : 'span 10'} backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <StatBox
                title={routines.length}
                subtitle="Rutinas"
                increase="+14%"
                icon={
                  <AccessibilityNewIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}/>
                }
              />
            </Box>
            {isAdmin?  <Box gridColumn="span 6" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <StatBox
                title={users.length}
                subtitle="Clientes actuales"

                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}/>
                }
              />
            </Box> : undefined}

            {/* ROW 2 */}
            <Box
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                                    Ganancias generadas
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                                    $283,392
                  </Typography>
                </Box>

                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{
                        fontSize: '26px',
                        color: colors.greenAccent[500]
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="250px" mt="-20px">
                <LineChart isDashboard={true}/>
              </Box>
            </Box>
            {isAdmin ? <Box id="info" gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
              <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
                <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                                      Clientes
                </Typography>
              </Box>
              <Box>
                {users.map((user, i) => {
                  return (
                    <Box
                      key={i}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      p="15px"
                    >
                      <Box>
                        <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                          {user.firstName}
                        </Typography>
                        <Typography color={colors.grey[100]}>
                          {user.lastName}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}

              </Box>
            </Box> : <Box id="info" gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
              <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
                <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                                      Rutinas
                </Typography>
              </Box>
              <Box>
                {routines.map((routine, i) => {
                  return (
                    <Box
                      key={i}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      p="15px"
                    >
                      <Box>
                        <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                          {routine.name}
                        </Typography>
                        <Typography color={colors.grey[100]}>
                          {routine.target}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}

              </Box>
            </Box>}

          </Box>
        </Box>
      </Box>

    </Box>











  );
}