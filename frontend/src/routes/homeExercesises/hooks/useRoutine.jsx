import { createContext, useContext, useState } from 'react';

const RoutineContext = createContext({});

const RoutineProvider = ({ children }) => {
  const [newRoutine, setNewRoutine] = useState([]);
  return (
    <RoutineContext.Provider value={{ newRoutine, setNewRoutine }}>
      {children}
    </RoutineContext.Provider>
  );
};

const useRoutine = () => {
  return useContext(RoutineContext);
};

export { useRoutine, RoutineProvider };