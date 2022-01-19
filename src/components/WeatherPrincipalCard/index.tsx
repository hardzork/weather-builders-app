import React, { useCallback } from "react";
import { Image, RefreshControl } from "react-native";
import { useWeather } from "../../hooks/useWeather";
import {
  Scroll,
  Container,
  Header,
  LocationInfoContainer,
  Location,
  TimeInfo,
  Date,
  Time,
  IconContainer,
  TemperatureContainer,
  Temperature,
  Description,
  RefreshInfoContainer,
  RefreshInfo,
} from "./styles";

export function WeatherPrincipalCard() {
  const { loading, weather, getWeatherInfo } = useWeather();

  const onRefresh = useCallback(async () => {
    await getWeatherInfo();
  }, []);

  return (
    <Scroll
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
    >
      <Container>
        <Header>
          <LocationInfoContainer>
            <Location>{weather.location}</Location>
            <TimeInfo>
              <Date>{weather.date}</Date>
              <Time>{weather.time}</Time>
            </TimeInfo>
          </LocationInfoContainer>
          <IconContainer>
            <Image
              source={{ uri: weather.icon }}
              style={{ width: 100, height: 100 }}
            />
          </IconContainer>
        </Header>
        <TemperatureContainer>
          <Temperature>{weather.temp}</Temperature>
          <Description>{weather.temp_description}</Description>
        </TemperatureContainer>
        <RefreshInfoContainer>
          <RefreshInfo>Puxe para atualizar</RefreshInfo>
        </RefreshInfoContainer>
      </Container>
    </Scroll>
  );
}
