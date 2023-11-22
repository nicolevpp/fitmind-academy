import { useEffect, useState} from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import { Box, Button, Stack, TextField, Typography } from '@mui/material'


export default function SearchExercises({ setExercises, bodyPart, setBodyPart}) {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        async function fetchExercisesData () {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setBodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData()
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

                const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
                );

                setSearch('')
                setExercises(searchedExercises)
        }
    }

    return (
        <>
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
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
        </Stack>

        {/* <div className=" pt-20  bg-zinc-100">
            <h1 className="text-center text-4xl font-bold">Crear una rutina</h1>

            <div className="flex justify-center py-8">
                <input className=" pl-4 rounded-md h-10 w-2/4" type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Buscar ejercicios"/>
                <button className=' w-40 rounded-r h-10 bg-slate-300 cursor-pointer transition-all ease-in-out hover:bg-slate-400' onClick={handleSearch}>Buscar ejercicios</button>
            </div>
           

            <div className=" m-auto w-3/4">
                <p className="text-center">Parte del cuerpo</p>
                <HorizontalScrollbar data={bodyParts}
                bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </div>
        </div> */}
        </>
    )
}


