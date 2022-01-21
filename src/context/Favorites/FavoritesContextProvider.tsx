import { ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritesContext } from "./FavoritesContext";
import { Alert } from "react-native";

export type FavoritesContextProviderProps = {
  children: ReactNode;
};

export function FavoritesContextProvider({
  children,
}: FavoritesContextProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  async function add(city: string) {
    try {
      setLoading(true);
      let cities: string[] = [];
      const favoriteCities = await AsyncStorage.getItem(
        process.env.ASYNC_STORAGE_KEY as string
      );
      if (favoriteCities) {
        cities = JSON.parse(favoriteCities);
        if (await exists(city)) {
          return;
        }
      }
      const newFavoriteCities = [...cities, city];
      await AsyncStorage.setItem(
        process.env.ASYNC_STORAGE_KEY as string,
        JSON.stringify(newFavoriteCities)
      );
      setFavorites(newFavoriteCities);
    } catch (error) {
      Alert.alert(
        "Oops! Aconteceu algo...",
        `Ocorreu um erro ao salvar o favorito. \r\nDescrição: ${error}`
      );
    } finally {
      setLoading(false);
    }
  }
  async function remove(city: string) {
    try {
      setLoading(true);
      const favoriteCities = await AsyncStorage.getItem(
        process.env.ASYNC_STORAGE_KEY as string
      );
      if (!favoriteCities) {
        return;
      }
      const cities: string[] = JSON.parse(favoriteCities);
      const newFavoriteCities = cities.filter(
        (favoriteCity) => favoriteCity !== city
      );
      await AsyncStorage.removeItem(process.env.ASYNC_STORAGE_KEY as string);
      await AsyncStorage.setItem(
        process.env.ASYNC_STORAGE_KEY as string,
        JSON.stringify(newFavoriteCities)
      );
      setFavorites(newFavoriteCities);
    } catch (error) {
      Alert.alert(
        "Oops! Aconteceu algo...",
        `Ocorreu um erro ao remover o favorito. \r\nDescrição: ${error}`
      );
    } finally {
      setLoading(false);
    }
  }
  async function exists(city: string) {
    try {
      let cities: string[] = [];
      const favoriteCities = await AsyncStorage.getItem(
        process.env.ASYNC_STORAGE_KEY as string
      );
      if (favoriteCities) {
        cities = JSON.parse(favoriteCities);
        if (cities.includes(city)) {
          return true;
        }
        return false;
      }
      return false;
    } catch (error) {
      Alert.alert(
        "Oops! Aconteceu algo...",
        `Ocorreu um erro ao verificar se o favorito já existe. \r\nDescrição: ${error}`
      );
      return true;
    }
  }
  async function getFavorites() {
    try {
      const favoriteCities = await AsyncStorage.getItem(
        process.env.ASYNC_STORAGE_KEY as string
      );
      favoriteCities && setFavorites(JSON.parse(favoriteCities));
    } catch (error) {
      Alert.alert(
        "Oops! Aconteceu algo...",
        `Ocorreu um erro ao buscar os favoritos. \r\nDescrição: ${error}`
      );
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        loading,
        add,
        remove,
        exists,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
