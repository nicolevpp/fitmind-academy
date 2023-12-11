import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';


export default function SimilarExercises ({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant="h3" mb={5}>
                Ejercicios para el mismo musculo
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>
          : <Loader/>}
      </Stack>

      <Typography variant="h3" mb={5}>
                Ejercicios con el mismo equipo
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>
          : <Loader/>}
      </Stack>
    </Box>
  );
}