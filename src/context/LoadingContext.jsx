// src/context/LoadingContext.jsx
import React, { createContext, useState, useContext } from "react";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isPageLoading,
        setIsPageLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
