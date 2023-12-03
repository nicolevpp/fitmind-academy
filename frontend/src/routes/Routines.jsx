import { Box } from "@mui/material"
import Topbar from "../components/Topbar"
import SidebarSection from "../components/SidebarSection"
import Header from "../components/Header"



export default function Routines(){

   
    
    return (
       
        <Box display="flex">
            <SidebarSection/>
            <Box m="20px" width="100%">
                <Topbar/>
                <Box display="flex" justifyContent="space-between"  flexDirection="column">                
                    <Header  title="CREAR USUARIO" subtitle="Crear un nuevo perfil de usuario"/>
                    <h1>Hola</h1>
                </Box>
            </Box>
        </Box>   
       
           

          
     
     
    
        
    
    )
}