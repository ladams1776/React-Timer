import React, { useState, createContext, useCallback } from 'react';

export const FullModeContext = createContext();
export const FullModeActionsContext = createContext();

const FullModeContextProvider = ({ children }) => {
  const [isFullMode, setIsFullModin] = useState(false);
  const setIsFullMode = useCallback(isFullMode => setIsFullModin(isFullMode), [setIsFullModin]);
  
  return (
    <FullModeContext.Provider value={isFullMode}>
      <FullModeActionsContext.Provider value={setIsFullMode}>{children}</FullModeActionsContext.Provider>
    </FullModeContext.Provider>
  );
};

export default FullModeContextProvider;