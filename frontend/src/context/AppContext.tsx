import React, { createContext, useContext } from 'react';

// Define the type for the context value
interface IAppContext {
  bgData: any;
  setBgData: (newData: any) => void;
}

// Create the context with an initial value
const AppContext = createContext<IAppContext>({
  bgData: '',
  setBgData: () => {},
});

// Custom hook to access the context value
const useAppContext = () => useContext(AppContext);

export { AppContext, useAppContext, IAppContext  };
