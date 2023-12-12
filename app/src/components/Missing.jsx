// import { useNavigate } from 'react-router-dom';

// export default function Unauthorized () {
//   const navigate = useNavigate();
//   const goBack = () => navigate(-1);
//   return (
//     <section>
//       <h1>Unauthorized</h1>
//       <br />
//       <p>No tiene los permisos para acceder a esta página.</p>
//       <div>
//         <button onClick={goBack}>Ir atrás</button>
//       </div>
//     </section>
//   );
// }

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Fitmind Academy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Missing() {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
            ¡Oh no! Página no encontrada. ⚠️
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'La página que ha solicitado generó un error 404: Not Found.'}
        </Typography>
        <Button color="secondary" variant="contained" onClick={goBack}>Ir atrás</Button>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}