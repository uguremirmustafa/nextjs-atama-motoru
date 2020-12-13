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

  const contextProps = {
    schools,
    getSchoolsData,
  };

  return <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext };
