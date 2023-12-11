import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Topbar from '../components/Topbar';
import SidebarSection from '../components/SidebarSection';
import Header from '../components/Header';
import { tokens } from '../theme';
import { mockTransactions } from '../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

// Charts
import LineChart from '../components/LineChart';
import StatBox from '../components/StatBox';

// import BarChart from '../../components/BarChart'
// import ProgressCircle from '../../components/ProgressCircle'






export default function Dashboard(){


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
            <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <StatBox
                title="15"
                subtitle="Rutinas completadas"
                increase="+14%"
                icon={
                  <AccessibilityNewIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}/>
                }
              />
            </Box>
            <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <StatBox
                title="20"
                subtitle="Planes comprados"
                progress="0.5"
                increase="+21%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}/>
                }
              />
            </Box>
            <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <StatBox
                title="20"
                subtitle="Clientes nuevos"

                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}/>
                }
              />
            </Box>
            <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <StatBox
                title="2,342,234"
                subtitle="Trafico"
                progress="0.80"
                increase="+43%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}/>
                }
              />
            </Box>

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
            {/* TRANSACTIONS */}
            <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
              <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
                <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                                        Clientes
                </Typography>
              </Box>
              {mockTransactions.map((transaction, i) => {
                <Box
                  key={`${transaction.txId}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                      {transaction.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {transaction.user}
                    </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">{transaction.cost}</Box>
                </Box>;
              })}
            </Box>

          </Box>
        </Box>
      </Box>

    </Box>











  );
}