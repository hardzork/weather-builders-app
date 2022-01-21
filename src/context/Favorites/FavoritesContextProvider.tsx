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
        "@WEATHER_BUILDERS_APP_FAVORITE_CITIES"
      );
      if (favoriteCities) {
        cities = JSON.parse(favoriteCities);
        if (await exists(city)) {
          return;
        }
      }
      const newFavoriteCities = [...cities, city];
      await AsyncStorage.setItem(
        "@WEATHER_BUILDERS_APP_FAVORITE_CITIES",
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
        "@WEATHER_BUILDERS_APP_FAVORITE_CITIES"
      );
      if (!favoriteCities) {
        return;
      }
      const cities: string[] = JSON.parse(favoriteCities);
      // console.log(cities);
      const newFavoriteCities = cities.filter(
        (favoriteCity) => favoriteCity !== city
      );
      // console.log(newFavoriteCities);
      await AsyncStorage.removeItem("@WEATHER_BUILDERS_APP_FAVORITE_CITIES");
      await AsyncStorage.setItem(
        "@WEATHER_BUILDERS_APP_FAVORITE_CITIES",
        JSON.stringify(newFavoriteCities)
      );
      // const test = await AsyncStorage.getItem(
      //   "@WEATHER_BUILDERS_APP_FAVORITE_CITIES"
      // );
      // console.log(test);
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
        "@WEATHER_BUILDERS_APP_FAVORITE_CITIES"
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
        "@WEATHER_BUILDERS_APP_FAVORITE_CITIES"
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
