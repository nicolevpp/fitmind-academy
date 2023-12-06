import Alert from '@mui/material/Alert';

export default function createNotification (isError, message) {

  if (isError) return (
    <Alert style={{ position:'absolute', top: '50%' }} severity="error">{message}</Alert>
  );
  else return (
    <Alert style={{ position:'absolute', top: '50%' }} severity="success">{message}</Alert>
  );

}



