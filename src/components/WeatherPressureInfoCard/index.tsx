import * as React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Icon,
  IconContainer,
  PressureInfoContainer,
  PressureLabel,
  Pressure,
} from "./styles";
import { useWeather } from "../../hooks/useWeather";

export interface WeatherPressureInfoCardProps {}

export function WeatherPressureInfoCard(props: WeatherPressureInfoCardProps) {
  const { weather } = useWeather();
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <PressureInfoContainer>
        <PressureLabel>Pressão</PressureLabel>
        <Pressure>{weather.pressure}</Pressure>
      </PressureInfoContainer>
    </Container>
  );
}
