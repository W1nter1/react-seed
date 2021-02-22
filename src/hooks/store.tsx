import React from "react";
import StoresContext from "@/store";

// store --> context
export const useStore = () => React.useContext(StoresContext);