import { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import SearchExercises from './components/SearchExercises';
import Exercises from './components/Exercises';
import { Box } from '@mui/material';

const ShowExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);

  const handleBodyPart = async ({ bodyPart }) => {
    const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    setExercises(data);
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      setExercises(data);
    };
    fetchExercisesData();
  }, []);

  useEffect(() => {
    setFilteredExercises(exercises);
  }, [exercises]);

  const handleFilter = ({ search }) => {
    const filteredExercises = search ? exercises.filter(
      (item) => item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search),
    ) : exercises;
    setFilteredExercises(filteredExercises);
  };

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <SearchExercises
        handleBodyPart={handleBodyPart}
        handleFilter={handleFilter}
      />
      <Exercises
        filteredExercises={filteredExercises}
      />
    </Box>
  );
};

export default ShowExercises;