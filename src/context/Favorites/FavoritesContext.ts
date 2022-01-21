import { createContext } from "react";

type FavoritesContextProps = {
  loading: boolean;
  favorites: string[];
  add: (city: string) => Promise<void>;
  remove: (city: string) => Promise<void>;
  exists: (city: string) => Promise<boolean>;
};

export const FavoritesContext = createContext({} as FavoritesContextProps);
