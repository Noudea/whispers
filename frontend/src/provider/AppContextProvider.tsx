"use client";

import React, { useState } from 'react';
import {AppContext, IAppContext} from "@/context/AppContext";


const AppContextProvider: React.FC = ({ children }) => {
  const [bgData, setBgData] = useState('');

  // Value object to be provided by the context
  const contextValue: IAppContext = {
    bgData,
    setBgData,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
