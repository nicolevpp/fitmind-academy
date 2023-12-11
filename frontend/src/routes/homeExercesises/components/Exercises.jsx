import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard';

export default function Exercises({ filteredExercises }){
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <>
      {/* <Button variant="contained"  color="secondary" sx={{position:'fixed', zIndex:'50', top: '0', display: ejercicios.length ? 'block' : 'none'}}>Guardar</Button> */}
      <Box id="exercises"  p="20px">
        {/* <Button primary onClick={() => hijoAPadre(ejercicios)}>Clic Hijo</Button> */}
        <Stack display="grid" sx={{ gap: { lg: '2rem', xs: '2rem' }, gridTemplateColumns: { xs: '100%', lg: '50% 50%' } }} flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))}
        </Stack>
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
          {filteredExercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(filteredExercises.length / exercisesPerPage)}
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
