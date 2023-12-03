// ExerciseContext.js
import { createContext, useState } from 'react';

export const ExerciseContext = createContext([]);

export const ExerciseProvider = ({ children }) => {
    const [selectedExercises, setSelectedExercises] = useState([]);

    function handleAddExercise(exercise) {
       setSelectedExercises(prevSelectedExercises => [...prevSelectedExercises, exercise.name]);
    }
    
    // useEffect(() => {
    //     console.log("Exercises seleccionados:", selectedExercises);
    // }, [selectedExercises]);

    return (
        <ExerciseContext.Provider value={{ selectedExercises, handleAddExercise }}>
            {children}
        </ExerciseContext.Provider>
    );

    
};



