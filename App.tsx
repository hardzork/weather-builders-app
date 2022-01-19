import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { WeatherContextProvider } from "./src/hooks/useWeather";
import { LocationContextProvider } from "./src/hooks/useLocation";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" />
      <LocationContextProvider>
        <WeatherContextProvider>
          <Routes />
        </WeatherContextProvider>
      </LocationContextProvider>
    </>
  );
}
