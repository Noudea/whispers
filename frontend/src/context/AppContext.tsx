import React, { createContext, useContext } from 'react';

// Define the type for the context value
interface IAppContext {
  whisperHightlightData: any;
  setWhisperHightlightData: (newData: any) => void;
}

// Create the context with an initial value
const AppContext = createContext<IAppContext>({
  whisperHightlightData: '',
  setWhisperHightlightData: () => {},
});

// Custom hook to access the context value
const useAppContext = () => useContext(AppContext);

export { AppContext, useAppContext, IAppContext  };
