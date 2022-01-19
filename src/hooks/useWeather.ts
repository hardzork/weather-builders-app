import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { WeatherContextProvider } from "../context/WeatherContextProvider";

function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}

export { WeatherContextProvider, useWeather };
