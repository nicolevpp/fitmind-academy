import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from '@mui/material';
import { Formik } from 'formik';
import { useRoutine } from './hooks/useRoutine';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { tokens } from '../../theme';
import axios from 'axios';
import toast from 'react-hot-toast';


const initialValues = {
  routineName: '',
  description: '',
};

const CreateRoutine = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { newRoutine, setNewRoutine } = useRoutine();

  const handleFormSubmit = async (values, { resetForm }) => {
    const generatedRoutine = {
      name: values.routineName,
      description: values.description,
      exercises: newRoutine,
    };


    await axios.post('/api/routines', generatedRoutine)
      .then((response) => {
        console.log(response);
        resetForm();
        setNewRoutine([]);
        toast.success('Rutina creada');
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const handleDeleteRoutine = ({ id }) => {
    setNewRoutine(newRoutine.filter(exercise => exercise.id !== id));
  };

  const handleUpdate = ({ id, value, type }) => {
    const excersiseToUpdate = newRoutine.find(routine => routine.id === id);
    const updatedExercise = {
      ...excersiseToUpdate,
      [type]: value,
    };
    setNewRoutine(newRoutine.map(exercise => exercise.id === id ? updatedExercise : exercise));
  };

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          <form  onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Nombre rutina"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.routineName}
              name="routineName"
            />
            <TextField
              sx={{ mt: '1rem' }}
              fullWidth
              variant="filled"
              type="text"
              label="Descripción"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              name="description"
            />
            <Box>
              {newRoutine.map((routine) =>
                <Box key={routine.id}
                  mt="1rem"
                  p="1rem"
                  borderBottom="1px solid"
                  borderColor={colors.grey[200]}
                >
                  <Box gap="1rem" display="flex" flexDirection="column" textAlign="center">
                    <Typography textTransform="capitalize" variant="h4">{routine.name}</Typography>
                    <Box
                      display="flex"
                      gap="1rem"
                    >
                      <FormControl fullWidth>
                        <InputLabel>Repeticiones</InputLabel>
                        <Select
                          defaultValue={5}
                          onChange={({ target }) => handleUpdate({
                            id: routine.id,
                            value: target.value,
                            type: 'repetitions',
                          })}
                          variant="filled"
                          label="Repeticiones"
                        >
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={20}>20</MenuItem>
                          <MenuItem value={30}>30</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel>Descanso</InputLabel>
                        <Select
                          defaultValue={'0 seg'}
                          onChange={({ target }) => handleUpdate({
                            id: routine.id,
                            value: target.value,
                            type: 'rest',
                          })}
                          variant="filled"
                          label="Descanso"
                        >
                          <MenuItem defaultValue={true} value="0 seg">0 seg</MenuItem>
                          <MenuItem value="10 seg">10 seg</MenuItem>
                          <MenuItem value="30 seg">30 seg</MenuItem>
                          <MenuItem value="60 seg">60 seg</MenuItem>
                          <MenuItem value="2 min">2 min</MenuItem>
                          <MenuItem value="3 min">3 min</MenuItem>
                          <MenuItem value="4 min">4 min</MenuItem>
                          <MenuItem value="5 min">5 min</MenuItem>

                        </Select>
                      </FormControl>
                      <Button sx={{ color: colors.grey[200] }} onClick={() => handleDeleteRoutine({ id: routine.id })}><HighlightOffIcon/></Button>
                    </Box>
                  </Box>
                </Box>

              )}
            </Box>
            <Button sx={{ mt: '1rem' }} color="secondary" variant="contained" type="submit">Guardar rutina</Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateRoutine;