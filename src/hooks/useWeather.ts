import { useContext } from "react";
import { WeatherContext } from "../context/Weather/WeatherContext";
import { WeatherContextProvider } from "../context/Weather/WeatherContextProvider";

function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}

export { WeatherContextProvider, useWeather };
