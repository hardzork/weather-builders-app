import { useEffect, useState } from "react";
import { View } from "react-native";
import { WeatherInfoProps } from "../../context/Weather/WeatherContext";
import { useWeather } from "../../hooks/useWeather";

import { FavoriteButton } from "../FavoriteButton";

import {
  Container,
  InfoContainer,
  City,
  DateInfoContainer,
  DateIcon,
  DateInfo,
  TimeInfoContainer,
  TimeIcon,
  Time,
  TemperatureInfoContainer,
  Temperature,
  TemperatureDescription,
  Icon,
  SideContainer,
  FavoriteContainer,
  IconContainer,
} from "./styles";

type WeatherCityCardProps = {
  city: string;
};

export function WeatherCityCard({ city }: WeatherCityCardProps) {
  const [weather, setWeather] = useState<WeatherInfoProps>(
    {} as WeatherInfoProps
  );
  const { getWeatherInfoByCityName } = useWeather();

  useEffect(() => {
    const loadWeatherInfo = async () => {
      if (city.length > 0) {
        const response = await getWeatherInfoByCityName(city);
        if (response) setWeather(response);
      } else {
        setWeather({} as WeatherInfoProps);
      }
    };
    loadWeatherInfo();
  }, [city]);

  if (!weather.temp) {
    return <View></View>;
  }
  return (
    <Container>
      <InfoContainer>
        <City>
          {weather.city_name}, {weather.country}
        </City>
        <DateInfoContainer>
          <DateIcon />
          <DateInfo>{weather.date}</DateInfo>
        </DateInfoContainer>
        <TimeInfoContainer>
          <TimeIcon />
          <Time>{weather.time}</Time>
        </TimeInfoContainer>
        <TemperatureInfoContainer>
          <Temperature>{weather.temp}</Temperature>
          <TemperatureDescription>
            {weather.temp_description}
          </TemperatureDescription>
        </TemperatureInfoContainer>
      </InfoContainer>
      <SideContainer>
        <FavoriteContainer>
          <FavoriteButton city={weather.city_name} />
        </FavoriteContainer>
        <IconContainer>
          <Icon source={{ uri: weather.icon }} />
        </IconContainer>
      </SideContainer>
    </Container>
  );
}
