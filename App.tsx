import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";
import { WeatherContextProvider } from "./src/hooks/useWeather";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" />
      <WeatherContextProvider>
        <Routes />
      </WeatherContextProvider>
    </>
  );
}
