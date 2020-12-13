/** @format */
import { createContext, useState } from 'react';

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [schools, setSchools] = useState([]);
  const getSchoolsData = async () => {
    const res = await fetch('/api/getSchools');
    const latestSchools = await res.json();
    setSchools(latestSchools);
  };
  const submitTercih = async (description) => {
    try {
      const res = await fetch('/api/create', {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: { 'Content-Type': 'application/json' },
      });
      const newTodo = await res.json();
      setTodos((prevTodos) => {
        return [newTodo, ...prevTodos];
      });
    } catch (error) {
      console.log(error);
    }
  };
  const contextProps = {
    schools,
    getSchoolsData,
    submitTercih,
  };

  return <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext };
