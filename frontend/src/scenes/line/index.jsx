import { Box } from "@mui/material"
import Topbar from "../global/Topbar"
import SidebarSection from "../global/SidebarSection"
import Header from "../../components/Header"
import LineChart from "../../components/LineChart";

export default function Line(){

    return (
       
        <Box display="flex">
            <SidebarSection/>
            <Box m="20px" width="100%">
                <Topbar/>
                <Box display="flex" justifyContent="space-between" flexDirection="column">
                    <Header title="Line Chart" subtitle="Simple Line Chart"/>
                    <Box height="75vh">
                        <LineChart/>
                    </Box>
                </Box>
            </Box>
        </Box>   
       
           

        
    
    )
}