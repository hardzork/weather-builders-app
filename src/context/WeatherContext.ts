import { createContext } from "react";

export type WeatherInfoProps = {
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
