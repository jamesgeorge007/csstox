import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

export const useOutputType = () => useContext(Context);

const AppContext = ({ children }) => {
  const [outputType, setOutputType] = useState("React Native");
  return (
    <Context.Provider value={{ outputType, setOutputType }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
