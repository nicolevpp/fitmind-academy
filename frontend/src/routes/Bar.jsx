import BarChart from "../components/BarChart";
import { Box } from "@mui/material"
import Topbar from "../components/Topbar"
import SidebarSection from "../components/SidebarSection"
import Header from "../components/Header"

export default function Bar(){

    return (
       
        <Box display="flex">
            <SidebarSection/>
            <Box m="20px" width="100%">
                <Topbar/>
                <Box display="flex" justifyContent="space-between" flexDirection="column">
                    <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
                    <Box height="75vh">
                        <BarChart/>
                    </Box>
                </Box>
            </Box>
        </Box>   
       
           

        
    
    )
}