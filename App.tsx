import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/routes";
import {
  LocationContextProvider,
  WeatherContextProvider,
  FavoritesContextProvider,
} from "./src/hooks";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" />
      <LocationContextProvider>
        <WeatherContextProvider>
          <FavoritesContextProvider>
            <Routes />
          </FavoritesContextProvider>
        </WeatherContextProvider>
      </LocationContextProvider>
    </>
  );
}
