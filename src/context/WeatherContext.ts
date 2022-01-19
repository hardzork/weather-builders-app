import { createContext } from "react";

export type WeatherInfoProps = {
  location: string;
  date: string;
  time: string;
  icon: string;
  temp: string;
  temp_description: string;
};

type WeatherContextProps = {
  loading: boolean;
  weather: WeatherInfoProps;
  getWeatherInfo: () => Promise<void>;
};

export const WeatherContext = createContext({} as WeatherContextProps);
