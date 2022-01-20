import * as React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useWeather } from "../../hooks/useWeather";
import {
  Container,
  Icon,
  IconContainer,
  HumidityInfoContainer,
  HumidityLabel,
  Humidity,
} from "./styles";

export interface WeatherHumidityInfoCardProps {}

export function WeatherHumidityInfoCard(props: WeatherHumidityInfoCardProps) {
  const { weather } = useWeather();
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <HumidityInfoContainer>
        <HumidityLabel>Umidade</HumidityLabel>
        <Humidity>{weather.humidity}</Humidity>
      </HumidityInfoContainer>
    </Container>
  );
}
