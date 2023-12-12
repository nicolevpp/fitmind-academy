import { Box, Button, TextField } from '@mui/material';
import Topbar from '../components/Topbar';
import SidebarSection from '../components/SidebarSection';
import Header from '../components/Header';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import { validPhone, validPassword } from '../Regex';
import axios from 'axios';
import toast from 'react-hot-toast';


const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  password: ''
};

const userSchema = yup.object().shape({
  firstName: yup.string().required('Es necesario completar el campo'),
  lastName: yup.string().required('Es necesario completar el campo'),
  email: yup.string().email('El email no es válido').required('Es necesario completar el campo'),
  phone: yup
    .string()
    .matches(validPhone, 'El número de teléfono no es válido')
    .required('Es necesario completar el campo'),
  address: yup.string().required('Es necesario completar el campo'),
  password: yup.string().matches(validPassword, 'La contraseña debe contener al menos: 1 mayúscula, 1 minúscula, 1 número y 8 caracteres de largo.').required('Es necesario completar el campo'),
});

export default function Form(){

  const isNonMobile = useMediaQuery('(min-width:600px)');


  async function handleFormSubmit (values, { resetForm }) {

    let user = values;

    await axios.post('/api/users', user)
      .then((response) => {
        // console.log(response.data)

        toast.success('Usuario creado con éxto');
        console.log(response);
        resetForm();

      })
      .catch((error) => {
        console.log(error.response.data.error);
        toast.error(`${error.response.data.error.toString()}`);
      });

    console.log(alert);
  }

  return (

    <Box display="flex">
      <SidebarSection/>
      <Box m="20px" width="100%">
        <Topbar/>
        <Box display="flex" justifyContent="space-between"  flexDirection="column">
          <Header  title="CREAR USUARIO" subtitle="Crear un nuevo perfil de usuario"/>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    '& > div': {
                      gridColumn: isNonMobile ? undefined
                        : 'span 4' }
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Primer Nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Apellido"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: 'span 4' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Numero telefónico"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    sx={{ gridColumn: 'span 4' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Dirección"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    error={!!touched.address && !!errors.address}
                    helperText={touched.address && errors.address}
                    sx={{ gridColumn: 'span 4' }}
                  />
                  <Button color="primary" variant="contained" height="45px" onClick={() => {setFieldValue ('password', (Math.random().toString(36).slice(2).toUpperCase() + Math.random().toString(36).slice(2)));}}>Crear contraseña</Button>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Contraseña"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: 'span 3' }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                                        Crear nuevo usuario
                  </Button>

                </Box>
              </form>
            )}
          </Formik>

        </Box>
      </Box>
    </Box>









  );
}