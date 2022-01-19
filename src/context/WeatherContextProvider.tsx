import React, { ReactNode, useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { WeatherContext, WeatherInfoProps } from "./WeatherContext";

export type WeatherContextProviderProps = {
  children: ReactNode;
};

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
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
      // await wait(2000);
      setWeather({
        location: "Belém, BR",
        date: format(new Date(), "E dd 'de' LLL 'de' yyyy", {
          locale: ptBR,
        }),
        time: format(new Date(), "HH:mm"),
        icon: "https://openweathermap.org/img/wn/10d@2x.png",
        temp: `${23}°C`,
        temp_description: "nublado",
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
