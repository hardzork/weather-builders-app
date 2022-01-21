import React, { ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";

import { WeatherContext, WeatherInfoProps } from "./WeatherContext";
import { api } from "../../services/api";
import { useLocation } from "../../hooks/useLocation";
import { getDirectionByMeteorologicalDegrees } from "../../utils/degreesRotation";
import { getZonedDateNow, getZonedTimeNow } from "../../utils/zonedTime";

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
  const { location, completed: locationCompleted } = useLocation();
  useEffect(() => {
    async function loadWeatherInfo() {
      await getWeatherInfo();
    }
    loadWeatherInfo();
  }, [locationCompleted]);

  async function getWeatherInfo() {
    try {
      setLoading(true);
      if (locationCompleted) {
        const response = await api.get<WeatherApiResponse>("weather", {
          params: {
            appid: process.env.OPEN_WEATHER_API_KEY,
            lat: location.lat,
            lon: location.lon,
            units: process.env.OPEN_WEATHER_API_UNITS,
            lang: process.env.OPEN_WEATHER_API_LANG,
          },
        });
        const { weather, main, wind } = response.data;
        setWeather({
          icon: `${process.env.IMG_URL_PREFIX}/${weather[0].icon}@2x.png`,
          temp: `${Math.round(main.temp)}°C`,
          temp_description: weather[0].description,
          feels_like: `${Math.round(main.feels_like)}°C`,
          temp_min: `${Math.round(main.temp_min)}°C`,
          temp_max: `${Math.round(main.temp_max)}°C`,
          pressure: `${main.pressure} hPa`,
          humidity: `${main.humidity} %`,
          wind_speed: `${Math.round(wind.speed * 3.6)} km/h`,
          wind_direction: getDirectionByMeteorologicalDegrees(wind.deg),
          city_name: "",
          country: "",
          date: "",
          time: "",
          lat: 0,
          lon: 0,
        });
      }
    } catch (error) {
      Alert.alert(
        "Oops! Aconteceu algo...",
        `Ocorreu um erro ao buscar as informações do tempo na sua região. \r\nDescrição: ${error}`
      );
    } finally {
      setLoading(false);
    }
  }

  async function getWeatherInfoByCityName(
    city: string
  ): Promise<WeatherInfoProps | null> {
    try {
      const response = await api.get<WeatherApiResponse>("weather", {
        params: {
          appid: process.env.OPEN_WEATHER_API_KEY,
          q: city,
          units: process.env.OPEN_WEATHER_API_UNITS,
          lang: process.env.OPEN_WEATHER_API_LANG,
        },
      });
      const { weather, main, wind, name, sys, timezone } = response.data;
      return {
        icon: `${process.env.IMG_URL_PREFIX}/${weather[0].icon}@2x.png`,
        temp: `${Math.round(main.temp)}°C`,
        temp_description: weather[0].description,
        feels_like: `${Math.round(main.feels_like)}°C`,
        temp_min: `${Math.round(main.temp_min)}°C`,
        temp_max: `${Math.round(main.temp_max)}°C`,
        pressure: `${main.pressure} hPa`,
        humidity: `${main.humidity} %`,
        wind_speed: `${Math.round(wind.speed * 3.6)} km/h`,
        wind_direction: getDirectionByMeteorologicalDegrees(wind.deg),
        city_name: name,
        country: sys.country,
        date: getZonedDateNow(timezone),
        time: getZonedTimeNow(timezone),
        lat: 0,
        lon: 0,
      } as WeatherInfoProps;
    } catch (error) {
      // @ts-ignore
      if (error.response?.status === 404) {
        Alert.alert(
          "Cidade não encontrada!",
          `Não conseguimos encontrar a cidade "${city.trim()}".`
        );
        return null;
      }
      Alert.alert(
        "Oops! Aconteceu algo...",
        `Ocorreu um erro ao buscar as informações do tempo na sua região. \r\nDescrição: ${error}`
      );
      return null;
    } finally {
      setLoading(false);
    }
  }

  return (
    <WeatherContext.Provider
      value={{ loading, getWeatherInfo, getWeatherInfoByCityName, weather }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
