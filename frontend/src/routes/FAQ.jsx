import { Box, useTheme, Typography } from '@mui/material';
import Topbar from '../components/Topbar';
import SidebarSection from '../components/SidebarSection';
import Header from '../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSumary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../theme';

export default function FAQ(){
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <Box display="flex">
      <SidebarSection/>
      <Box m="20px" width="100%">
        <Topbar/>
        <Box display="flex" justifyContent="space-between" flexDirection="column">
          <Header title="FAQ" subtitle="Preguntas frecuentes"/>
          <Accordion defaultExpanded>
            <AccordionSumary expandIcon={<ExpandMoreIcon/>}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                        Una pregunta importante
              </Typography>
            </AccordionSumary>
            <AccordionDetails>
              <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto, dolor laborum non et dolorum autem a eius tempore ad? Iusto eligendi nisi delectus illo sequi impedit esse deleniti natus.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSumary expandIcon={<ExpandMoreIcon/>}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                        Una pregunta importante
              </Typography>
            </AccordionSumary>
            <AccordionDetails>
              <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto, dolor laborum non et dolorum autem a eius tempore ad? Iusto eligendi nisi delectus illo sequi impedit esse deleniti natus.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSumary expandIcon={<ExpandMoreIcon/>}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                        Una pregunta importante
              </Typography>
            </AccordionSumary>
            <AccordionDetails>
              <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto, dolor laborum non et dolorum autem a eius tempore ad? Iusto eligendi nisi delectus illo sequi impedit esse deleniti natus.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSumary expandIcon={<ExpandMoreIcon/>}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                        Una pregunta importante
              </Typography>
            </AccordionSumary>
            <AccordionDetails>
              <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto, dolor laborum non et dolorum autem a eius tempore ad? Iusto eligendi nisi delectus illo sequi impedit esse deleniti natus.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSumary expandIcon={<ExpandMoreIcon/>}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                        Una pregunta importante
              </Typography>
            </AccordionSumary>
            <AccordionDetails>
              <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto, dolor laborum non et dolorum autem a eius tempore ad? Iusto eligendi nisi delectus illo sequi impedit esse deleniti natus.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSumary expandIcon={<ExpandMoreIcon/>}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                        Una pregunta importante
              </Typography>
            </AccordionSumary>
            <AccordionDetails>
              <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto, dolor laborum non et dolorum autem a eius tempore ad? Iusto eligendi nisi delectus illo sequi impedit esse deleniti natus.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>









  );
}