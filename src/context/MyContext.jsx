"use client";
import { createContext, useContext, useState } from 'react';
const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState('Dashboard');
  
  const contextValue = {
    headerTitle,
    setHeaderTitle,
  };

  return (
    <MyContext.Provider value={contextValue }>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
