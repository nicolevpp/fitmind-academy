import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import Header from '../components/Header';
import Topbar from '../components/Topbar';
import SidebarSection from '../components/SidebarSection';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Contacts () {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tableData, setTableData] = useState([]);



  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get('/api/users');
      return data;
    };

    getUsers()
      .then((data) => setTableData(data));
  }, []);





  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'firstName',
      headerName: 'Nombre',
      flex: 1,
      cellClassName: 'name-columns--cell' },
    { field: 'lastName',
      headerName: 'Apellido',
      flex: 1,
      cellClassName: 'name-columns--cell' },
    { field: 'email',
      headerName: 'Email',
      flex: 1 },
    { field: 'phone',
      headerName: 'Teléfono',
      flex: 1 },
    { field: 'password',
      headerName: 'Contraseña',
      flex: 1 },
    { field: 'routines',
      headerName: 'Rutinas',
      flex: 1 },
  ];

  return (

    <Box display="flex">
      <SidebarSection/>
      <Box m="20px" width="100%">
        <Topbar/>
        <Box m="20px">
          <Header title="EQUIPO" subtitle="Gestionar miembros del equipo"/>
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              '& .MuiDataGrid-root' : {
                border: 'none'
              },
              '& .MuiDataGrid-cell': {
                borderBottom: 'none'
              },
              '& .name-column--cell' : {
                color: colors.greenAccent[300]
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: colors.blueAccent[700],
                borderBottom: 'none'
              },
              '& .MuiDataGrid-virtualScroller': {
                backgroundColor: colors.primary[400]
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: 'none',
                backgroundColor: colors.blueAccent[700]
              },
              '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                color: `${colors.grey[100]} !important`
              }
            }}
          >
            {/* <DataGrid
                rows={mockDataContacts}
                columns={columns}
                components={{ Toolbar: GridToolbar}}
                /> */}
            <DataGrid
              slots={{
                toolbar: GridToolbar,
              }}
              rows={tableData}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </Box>
      </Box>
    </Box>

  );
}

