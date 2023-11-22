import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
import Detail from "../components/Detail"
import ExerciseVideos from "../components/ExerciseVideos"
import SimilarExercises from "../components/SimilarExercises"


export default function ExerciseDetail() {

    const [ExerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState({})
    const [targetMuscleExercises, setTargetMuscleExercises] = useState({})
    const [equipmentExercises, setEquipmentExercises] = useState({})

    // UseParams nos da acceso al numero del id en la URL
    const { id } = useParams()

    // UseEffect para calcular el ID

    useEffect(() => {
        const fectchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData)

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideosData.contents)

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            setTargetMuscleExercises(targetMuscleExercisesData)

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setEquipmentExercises(equipmentExercisesData)

        }

        fectchExercisesData()
    }, [id])

    // El dependency array significa que se va a llamar la funcion, cada vez que el elemento seleccionado cambie

    return (
       <Box>
            <Detail exerciseDetail={ExerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={ExerciseDetail.name}/>
            <SimilarExercises targetMuscleExercises={targetMuscleExercises}
            equipmentExercises={equipmentExercises}
            />
       </Box>
    )
}