import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

export default function SearchExercises({ handleBodyPart, handleFilter }) {
  return (
    <>
      <Typography sx={{ gridColumn: 'span 4' }} textAlign="center" variant="h4">Buscar ejercicios</Typography>
      <Box id="buscar-ejercicios" display="flex" gap="1rem">

        <FormControl variant="filled" fullWidth>
          <InputLabel id="demo-simple-select-label">Parte del cuerpo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Parte del cuerpo"
            onChange={({ target }) => handleBodyPart({ bodyPart: target.value })}
            defaultValue={'all'}
          >
            <MenuItem disabled value={'all'}>All</MenuItem>
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
        <FormControl fullWidth>
          <TextField
            label="Nombre del ejercicio"
            variant="filled"
            onChange={({ target }) => handleFilter({ search: target.value.toLocaleLowerCase() })}
            id="input-with-icon-adornment"
          />

        </FormControl>
      </Box>
    </>
  );    }
