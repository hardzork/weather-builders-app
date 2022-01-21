import { View } from "react-native";
import { useLocation, useWeather } from "../../hooks";
import {
  Container,
  Icon,
  IconContainer,
  PressureInfoContainer,
  PressureLabel,
  Pressure,
} from "./styles";

export function WeatherPressureInfoCard() {
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
