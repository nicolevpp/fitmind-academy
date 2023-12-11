import { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Pagination from '@mui/material/Pagination';
import { Box, Stack } from '@mui/material';



export default function Exercises({ exercises, setExercises, bodyPart, hijoAPadre, addExerciseToRoutine }){
  const [currentPage, setCurrentPage] = useState(1);
  const [ejercicios, setEjercicios ] = useState([]);

  const handleEjercicios = (ejercicio) => {
    const exists = ejercicios.find(e => e.id === ejercicio.id);

    if (exists) {
      setEjercicios(ejercicios.filter(e => ejercicio.id !== e.id));
    } else {
      setEjercicios(ejercicios.concat(ejercicio.name));
    }

  };



  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice (indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };


  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);


  useEffect(() => {
    hijoAPadre(ejercicios);
  }, [ejercicios, hijoAPadre]);



  return (
    <>
      {/* <Button variant="contained"  color="secondary" sx={{position:'fixed', zIndex:'50', top: '0', display: ejercicios.length ? 'block' : 'none'}}>Guardar</Button> */}
      <Box id="exercises"  p="20px">
        {/* <Button primary onClick={() => hijoAPadre(ejercicios)}>Clic Hijo</Button> */}
        <Stack direction="row" sx={{ gap: { lg: '2rem', xs: '2rem' } }} flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} handleEjercicios={handleEjercicios} ejercicios={ejercicios} />
          ))}
        </Stack>
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    </>
  );
}
