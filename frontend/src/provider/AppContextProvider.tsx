"use client";

import React, { useState } from 'react';
import {AppContext, IAppContext} from "@/context/AppContext";


const AppContextProvider: React.FC = ({ children }) => {
  const [whisperHightlightData, setWhisperHightlightData] = useState({});

  // Value object to be provided by the context
  const contextValue: IAppContext = {
    whisperHightlightData,
    setWhisperHightlightData,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
