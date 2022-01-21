import { useContext } from "react";
import { LocationContext } from "../context/Location/LocationContext";
import { LocationContextProvider } from "../context/Location/LocationContextProvider";

function useLocation() {
  const context = useContext(LocationContext);
  return context;
}

export { LocationContextProvider, useLocation };
