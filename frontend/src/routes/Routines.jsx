import { Box } from '@mui/material';
import Topbar from '../components/Topbar';
import SidebarSection from '../components/SidebarSection';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Routines(){


  const [routines, setRoutines] = useState();

  useEffect(() => {
    axios.get('/api/routines').then((response) => {
      setRoutines(response.data);
    });
  }, []);

  console.log(routines);


  return (

    <Box display="flex">
      <SidebarSection/>
      <Box m="20px" width="100%">
        <Topbar/>
        <Box display="flex" justifyContent="space-between"  flexDirection="column">
          <Header  title="CREAR USUARIO" subtitle="Crear un nuevo perfil de usuario"/>
          {/* <Box>
                    {routines.map((routine, index) => {
                        return (
                            <Accordion key={index}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography fontWeight="bold">{routine.routineName}:  </Typography>
                              <Typography>{routine.description}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {/* {routine.exercises.map((exercise, index) => {
                                    return (
                                        <Typography key={index}>{exercise.ejercicio}</Typography>
                                    )
                                })} */}
          {/* </Typography>
                            </AccordionDetails>
                          </Accordion>
                        )
                    })}
                    </Box>
                    // */}
        </Box>
      </Box>
    </Box>









  );
}