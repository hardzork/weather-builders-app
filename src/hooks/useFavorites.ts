import { useContext } from "react";
import { FavoritesContext } from "../context/Favorites/FavoritesContext";
import { FavoritesContextProvider } from "../context/Favorites/FavoritesContextProvider";

function useFavorites() {
  const context = useContext(FavoritesContext);
  return context;
}

export { FavoritesContextProvider, useFavorites };
