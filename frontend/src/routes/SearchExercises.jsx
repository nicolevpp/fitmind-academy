import { useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';


export default function SearchExercises({ setExercises, setBodyPart, bodyPart }) {


  const [search, setSearch] = useState('');




  // useEffect(() => {
  //     const fetchExercisesData = async () => {
  //       const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

  //       setBodyPart(['all', ...bodyPartsData]);
  //     };

  //     fetchExercisesData();
  //   }, []);


  const handleChangeBodyPart = (e) => {
    setBodyPart(e.target.value);
  };




  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
                   || item.target.toLowerCase().includes(search)
                   || item.equipment.toLowerCase().includes(search)
                   || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <Box id="buscar-ejercicios" display="grid" gap="30px" sx={{ gridColumn: 'span 2' }}>
        <Typography sx={{ gridColumn: 'span 4' }} textAlign="center" variant="h4">Buscar ejercicios</Typography>

        <FormControl variant="filled" fullWidth >
          <InputLabel id="demo-simple-select-label">Parte del cuerpo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bodyPart}
            label="Parte del cuerpo"
            onChange={handleChangeBodyPart}
            defaultValue={'all'}
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'back'}>Back</MenuItem>
            <MenuItem value={'cardio'}>Cardio</MenuItem>
            <MenuItem value={'chest'}>Chest</MenuItem>
            <MenuItem value={'lower arms'}>Lower arms</MenuItem>
            <MenuItem value={'lower legs'}>Lower legs</MenuItem>
            <MenuItem value={'neck'}>Neck</MenuItem>
            <MenuItem value={'shoulders'}>Shoulders</MenuItem>
            <MenuItem value={'upper legs'}>Upper legs</MenuItem>
            <MenuItem value={'upper arms'}>Upper arms</MenuItem>
            <MenuItem value={'waist'}>Waist</MenuItem>

          </Select>
        </FormControl>
        <FormControl  variant="standard" sx={{ gridColumn: 'span 2', display: 'grid' }}>
          <InputLabel htmlFor="input-with-icon-adornment" >
                            Buscar ejercicio por nombre
          </InputLabel>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            id="input-with-icon-adornment"
          />

        </FormControl>
        <Button color="primary" onClick={handleSearch}>Buscar</Button>
      </Box>
    </>
  );    }

{/* <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{
            fontSize: { lg:"44px", xs:"30px"}}} mb="50px" textAlign="center">
            Increibles ejercicios
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input:{
                fontWeight:"700",
                border:"none",
                borderRadius:"4px"},
                width: { lg:"800px", xs:"350px"},
                backgroundColor:"#fff", borderRadius:"40px"
            }}
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            placeholder="Buscar ejercicios" type="text"/>
            <Button className="search-btn"
            sx={{
                bgcolor:"#FF2625",
                color:"#fff",
                textTransform:"none",
                width: { lg:"175px", xs:"80px"},
                fontSize: { lg:"20px", xs:"14px"},
                height:"56px",
                position:"absolute",
                right:"0"
            }}
            onClick={handleSearch}
            >
                Buscar
            </Button>
        </Box>
        <Box sx={{
            position:"relative",
            width:"100%",
            p:"20px"
        }}>
            <HorizontalScrollbar data={bodyParts}
            bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts
            />
        </Box>
        </Stack> */}

