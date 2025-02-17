import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavigateContext = createContext();

const NavigationProvider = ({ children }) => {

  const navigate = useNavigate();

  return (
    <NavigateContext.Provider value={navigate}>
      {children}
    </NavigateContext.Provider>
  );
};

export default NavigationProvider;