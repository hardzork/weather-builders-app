import React, { ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { WeatherContext, WeatherInfoProps } from "./WeatherContext";
import { api } from "../services/api";

export type WeatherContextProviderProps = {
  children: ReactNode;
};

export type WeatherApiResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<WeatherInfoProps>(
    {} as WeatherInfoProps
  );

  useEffect(() => {
    async function loadWeatherInfo() {
      await getWeatherInfo();
    }
    loadWeatherInfo();
  }, []);

  async function getWeatherInfo() {
    try {
      setLoading(true);
      const response = await api.get<WeatherApiResponse>("weather", {
        params: {
          appid: "753b3c35c8d66c119cc0693cb0878377",
          lat: -1.455833,
          lon: -48.503887,
          units: "metric",
          lang: "pt_br",
        },
      });
      console.log("Chamou API");
      const { name, sys, dt, weather, main } = response.data;
      setWeather({
        location: `${name}, ${sys.country}`,
        date: format(new Date(), "E',' dd 'de' LLL 'de' yyyy", {
          locale: ptBR,
        }),
        time: format(new Date(), "HH:mm"),
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        temp: `${Math.round(main.temp)}°C`,
        temp_description: weather[0].description,
      });
    } catch (error) {
      Alert.alert(
        "Oops! Aconteceu algo...",
        `Ocorreu um erro ao buscar as informações do tempo na sua região. \r\nDescrição: ${error}`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <WeatherContext.Provider value={{ loading, getWeatherInfo, weather }}>
      {children}
    </WeatherContext.Provider>
  );
}
