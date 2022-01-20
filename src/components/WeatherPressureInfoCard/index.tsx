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
import { useLocation } from "../../hooks/useLocation";

export interface WeatherPressureInfoCardProps {}

export function WeatherPressureInfoCard(props: WeatherPressureInfoCardProps) {
  const { weather } = useWeather();
  const { completed } = useLocation();
  if (!completed) {
    return <View></View>;
  }
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
