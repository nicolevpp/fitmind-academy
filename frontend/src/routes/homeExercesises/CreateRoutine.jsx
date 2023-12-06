import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useRoutine } from './hooks/useRoutine';

const initialValues = {
  routineName: '',
  description: '',
};

const CreateRoutine = () => {

  const { newRoutine, setNewRoutine } = useRoutine();

  const handleFormSubmit = (values) => {
    const newNewRoutine = {
      name: values.routineName,
      description: values.description,
      exercises: newRoutine,
    };

    console.log(newNewRoutine);
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
                <Box key={routine.id}>
                  <Box display="flex" flexDirection="column" textAlign="center">
                    {routine.name}
                    <Box display="flex" gap="1rem">
                      <TextField
                        onChange={({ target }) => handleUpdate({
                          id: routine.id,
                          value: target.value,
                          type: 'repetitions',
                        })}
                        type="number"
                        id="filled-basic"
                        label="Repeticiones"
                        variant="filled"
                      />
                      <TextField
                        onChange={({ target }) => handleUpdate({
                          id: routine.id,
                          value: target.value,
                          type: 'rest',
                        })}
                        type="number"
                        id="filled-basic"
                        label="Descanso"
                        variant="filled"
                      />
                      <Button onClick={() => handleDeleteRoutine({ id: routine.id })}>Eliminar</Button>
                    </Box>
                  </Box>
                </Box>

              )}
            </Box>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateRoutine;