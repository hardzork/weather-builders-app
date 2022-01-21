import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { WeatherContextProvider } from "./src/hooks/useWeather";
import { LocationContextProvider } from "./src/hooks/useLocation";
import { FavoritesContextProvider } from "./src/hooks/useFavorites";

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
