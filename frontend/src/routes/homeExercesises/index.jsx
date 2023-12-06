
import { Box } from '@mui/material';
import SidebarSection from '../../components/SidebarSection.jsx';
import Topbar from '../../components/Topbar.jsx';
import Header from '../../components/Header.jsx';
import ShowExercises from './ShowExercises.jsx';
import { RoutineProvider } from './hooks/useRoutine.jsx';
import CreateRoutine from './CreateRoutine.jsx';

export default function HomeExercises(){
  return (
    <RoutineProvider>
      <Box display="flex">
        <SidebarSection/>
        <Box m="20px" width="100%">
          <Topbar/>
          <Box display="flex" justifyContent="space-between"  flexDirection="column">
            <Header  title="CREAR RUTINA" subtitle="Crear una nueva rutina de ejercicios"/>
            <Box display="flex" gap="2rem" flexDirection="row-reverse">
              <ShowExercises/>
              <CreateRoutine/>
            </Box>
          </Box>
        </Box>
      </Box>
    </RoutineProvider>
  );
}

{/* <Box display="flex" flexDirection="row">
<Box width="50%" sx={{borderRight: "1px solid", borderColor: colors.grey[800]}}>
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
{inputFields.map((input, index) => {
return (
<div key={index}>
<input
name='ejercicio'
value={input.ejercicio}
readOnly={true}
/>
<input
type="number"
name='repeticiones'
placeholder='Repeticiones'
value={input.repeticiones}
onChange={event => handleFormChange(index, event)}
/>
<input
type="number"
name='descanso'
placeholder='Descanso'
value={input.descanso}
onChange={event => handleFormChange(index, event)}
/>
<Button onClick={() => removeFields(index)}><HighlightOffIcon/></Button>
</div>
)
})}
 <Button type="submit">Submit</Button>
</form>
 )}
 </Formik>
</Box>
<Box width="50%" gap="1rem"
sx={{flexDirection:{xs: 'column', md: 'row'}}} justifyContent="space-between" p="1rem" >

    <SearchExercises
setExercises={setExercises}
bodyPart={bodyPart}
setBodyPart={setBodyPart}
/>
    <Exercises
    addExerciseToRoutine={addExerciseToRoutine}
setExercises={setExercises}
exercises={exercises}
bodyPart={bodyPart}
hijoAPadre={hijoAPadre}
/>
</Box>
</Box>    */}


// export default function HomeExercises(){
//   // configuraciones de color
//    const theme = useTheme()
//    const colors = tokens(theme.palette.mode)

//    const [exercises, setExercises] = useState([]);
//    const [bodyPart, setBodyPart] = useState('all');
//    const [datosEjercicios, setDatosEjercicios] = useState('');
//    const [alert, setAlert] = useState(false);
//    const [alertContent, setAlertContent] = useState('');
//    const [isSuccess, setIsSuccess] = useState('')

//    const handleClose = (reason) => {
//        if (reason === 'clickaway') {
//          return;
//        }

//        setAlert(false);
//      };


//    const hijoAPadre = (datoshijo) => {
//        setDatosEjercicios(datoshijo);
//      }

//    async function handleFormSubmit ( values, { resetForm } ) {

//        const exercises = inputFields


//        const finalValues = {...values, exercises }

//        console.log(finalValues);

//        await axios.post('/api/routines', finalValues)
//        .then((response) => {

//            setAlertContent(response.data);
//            setAlert(true);
//            setIsSuccess(true);

//            resetForm()
//            setInputFields([''])

//        })
//        .catch((error) => {
//            setAlertContent(error.response.data.error);
//            setAlert(true);
//            setIsSuccess(false);
//        })

//  }

//  const addExerciseToRoutine = ({ newExercise }) => {
//    setExercises(exercises.concat(newExercise));
//  }

// const [inputFields, setInputFields] = useState([''])

//  const handleFormChange = (index, event) => {
//    let data = [...inputFields];
//    data[index][event.target.name] = event.target.value;
//    setInputFields(data);
//  }


// // useEffect(() => {


// //     const ultimoElemento = datosEjercicios[datosEjercicios.length - 1];



// //     let newfield = { ejercicio: ultimoElemento, repeticiones: '', descanso: ''}
// //     setInputFields([...inputFields, newfield])
// // }, [datosEjercicios, inputFields])

//  const removeFields = (index) => {
//    let data = [...inputFields];
//    data.splice(index, 1)
//    setInputFields(data)
//  }

//  const initialValues = {
//    routineName: "",
//    description: "",
// }

//    return (

//        <Box display="flex">
//            <SidebarSection/>
//            <Box m="20px" width="100%">
//                <Topbar/>
//                <Box display="flex" justifyContent="space-between"  flexDirection="column">
//                    <Header  title="CREAR RUTINA" subtitle="Crear una nueva rutina de ejercicios"/>
//                    {alert ?
//                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
//                      <Alert onClose={handleClose} severity={isSuccess ? 'success' : 'warning'} sx={{ width: '100%' }}>
//                        {alertContent}
//                      </Alert>
//                    </Snackbar> : <></> }

//                    <Box display="flex" flexDirection="row">
//                        <Box width="50%" sx={{borderRight: "1px solid", borderColor: colors.grey[800]}}>
//                        <Formik
//                        onSubmit={handleFormSubmit}
//                        initialValues={initialValues}
//                        >
//                        {({ values, handleBlur, handleChange, handleSubmit }) => (
//                        <form  onSubmit={handleSubmit}>
//                         <TextField
//                            fullWidth
//                            variant="filled"
//                            type="text"
//                            label="Nombre rutina"
//                            onBlur={handleBlur}
//                            onChange={handleChange}
//                            value={values.routineName}
//                            name="routineName"
//                            />
//                            <TextField
//                            fullWidth
//                            variant="filled"
//                            type="text"
//                            label="Descripción"
//                            onBlur={handleBlur}
//                            onChange={handleChange}
//                            value={values.description}
//                            name="description"
//                            />
//                        {inputFields.map((input, index) => {
//                        return (
//                        <div key={index}>
//                        <input
//                        name='ejercicio'
//                        value={input.ejercicio}
//                        readOnly={true}
//                        />
//                        <input
//                        type="number"
//                        name='repeticiones'
//                        placeholder='Repeticiones'
//                        value={input.repeticiones}
//                        onChange={event => handleFormChange(index, event)}
//                        />
//                        <input
//                        type="number"
//                        name='descanso'
//                        placeholder='Descanso'
//                        value={input.descanso}
//                        onChange={event => handleFormChange(index, event)}
//                        />
//                        <Button onClick={() => removeFields(index)}><HighlightOffIcon/></Button>
//                        </div>
//                        )
//                        })}
//                         <Button type="submit">Submit</Button>
//                        </form>
//                         )}
//                         </Formik>
//                        </Box>
//                        <Box width="50%" gap="1rem"
//                        sx={{flexDirection:{xs: 'column', md: 'row'}}} justifyContent="space-between" p="1rem" >

//                            <SearchExercises
//                        setExercises={setExercises}
//                        bodyPart={bodyPart}
//                        setBodyPart={setBodyPart}
//                        />
//                            <Exercises
//                            addExerciseToRoutine={addExerciseToRoutine}
//                        setExercises={setExercises}
//                        exercises={exercises}
//                        bodyPart={bodyPart}
//                        hijoAPadre={hijoAPadre}
//                        />
//                        </Box>
//                    </Box>
//                </Box>
//            </Box>
//        </Box>

//    )
// }
