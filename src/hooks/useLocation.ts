import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";
import { LocationContextProvider } from "../context/LocationContextProvider";

function useLocation() {
  const context = useContext(LocationContext);
  return context;
}

export { LocationContextProvider, useLocation };
