import { View } from "react-native";
import { useLocation, useWeather } from "../../hooks";
import {
  Container,
  Icon,
  IconContainer,
  HumidityInfoContainer,
  HumidityLabel,
  Humidity,
} from "./styles";

export function WeatherHumidityInfoCard() {
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
      <HumidityInfoContainer>
        <HumidityLabel>Umidade</HumidityLabel>
        <Humidity>{weather.humidity}</Humidity>
      </HumidityInfoContainer>
    </Container>
  );
}
