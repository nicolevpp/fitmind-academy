import { useState } from "react";
import SearchExercises from "./SearchExercises";
import Exercises from "../components/Exercises";
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import SidebarSection from "../scenes/global/SidebarSection.jsx"
import Topbar from "../scenes/global/Topbar.jsx"
import Header from "../components/Header.jsx"
import { tokens } from "../theme"








export default function HomeExercises(){

   
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])

    return (

        
        <Box display="flex">
            <SidebarSection/>
            <Box m="20px" width="100%">
                <Topbar/>
                <Box display="flex" justifyContent="space-between"  flexDirection="column">                
                    <Header  title="RUTINAS" subtitle="Crear una nueva rutina"/>

                    <SearchExercises 
                    setExercises={setExercises}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    />
                    {/* <Exercises 
                    exercises={exercises}
                    setExercises={setExercises}
                    bodyPart={bodyPart}
                    /> */}
                    
                </Box>
            </Box>
        </Box> 
        

       
           

          
     
     
    
        
    
    )
}