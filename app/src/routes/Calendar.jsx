import { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import Topbar from '../components/Topbar';
import SidebarSection from '../components/SidebarSection';
import Header from '../components/Header';
import { tokens } from '../theme';

export default function Calendar(){
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);


  return (

    <Box display="flex">
      <SidebarSection/>
      <Box m="20px" width="100%">
        <Topbar/>
        <Box display="flex" justifyContent="space-between"  flexDirection="column">
          <Header title="Calendario" subtitle="Gestiona tus eventos"/>
          <Box display="flex" justifyContent="space-between">
            {/* CALENDAR SIDEBAR  */}
            <Box
              flex="1 1 20%"
              backgroundColor={colors.primary[400]}
              p="15px"
              borderRadius="4px"
            >
              <Typography variant="h5">Rutinas</Typography>
              <List>
                {currentEvents.map((event) => (
                  <ListItem key={event.id}
                    sx={{ backgroundColor: colors.greenAccent[500], margin: '10px 0', borderRadius: '2px' }}
                  >
                    <ListItemText
                      primary={event.title}
                      secondary={
                        <Typography>
                          {formatDate(event.start, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* CALENDAR */}
            <Box flex="1 1 100%" ml="15px">
              <FullCalendar
                height="75vh"
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin
                ]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                // select={handleDateClick}
                // eventClick={handleEventClick}
                eventsSet={(events) => setCurrentEvents(events)}
                initialEvents={[
                  { id: '1234', title: 'All-day event', date: '2023-11-16' },
                  { id: '4321', title: 'Timed event', date: '2023-11-19' },
                ]}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>




  );
}