import { View } from "react-native";
import { useLocation, useWeather } from "../../hooks";
import {
  Container,
  Icon,
  IconContainer,
  WindInfoContainer,
  WindLabel,
  WindSpeed,
  WindDirection,
} from "./styles";

export function WeatherWindInfoCard() {
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
      <WindInfoContainer>
        <WindLabel>Vento</WindLabel>
        <WindSpeed>{weather.wind_speed}</WindSpeed>
        <WindDirection>{weather.wind_direction}</WindDirection>
      </WindInfoContainer>
    </Container>
  );
}
