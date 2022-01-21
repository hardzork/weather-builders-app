import { createContext } from "react";

export type WeatherInfoProps = {
  icon: string;
  temp: string;
  temp_description: string;
  feels_like: string;
  temp_min: string;
  temp_max: string;
  pressure: string;
  humidity: string;
  wind_speed: string;
  wind_direction: string;
  lat: number;
  lon: number;
  city_name: string;
  country: string;
  date: string;
  time: string;
};

type WeatherContextProps = {
  loading: boolean;
  weather: WeatherInfoProps;
  getWeatherInfo: () => Promise<void>;
  getWeatherInfoByCityName: (city: string) => Promise<WeatherInfoProps | null>;
};

export const WeatherContext = createContext({} as WeatherContextProps);
