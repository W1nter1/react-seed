import React from "react";
import testStore from "./testStore";

const StoresContext = React.createContext({
  testStore,
});

export default StoresContext;