import {Link} from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'

export default function ExerciseCard ({ exercise, handleEjercicios, ejercicios }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const isInArray = ejercicios.find(e => e.id === exercise.id)
    

    return (
                <Box
                sx={{borderColor:isInArray ? colors.blueAccent[400] : colors.grey[800]}}
                onClick={() => handleEjercicios(exercise)}
                
                border='1px solid' padding='1rem' borderRadius='0.2rem' display='flex' flexDirection='column' alignItems='center' gap='0.5rem' justifyContent='space-between'>
                <img width='80%' src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
                <Box display='flex' flexDirection='row' gap="1rem">
                <Typography textTransform='capitalize' padding='0.3rem' borderRadius='0.3rem' color={colors.grey[100]} bgcolor={colors.grey[800]}>{exercise.bodyPart}</Typography>
                <Typography textTransform='capitalize' padding='0.3rem' borderRadius='0.3rem' color={colors.grey[100]} bgcolor={colors.grey[800]} >{exercise.target}</Typography>
                </Box>
                    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
                    <Typography textAlign='center' fontWeight='bold' color={colors.grey[100]} variant='h4'  textTransform="capitalize">{exercise.name}</Typography>
                    </Link>
                </Box>
    )
}
