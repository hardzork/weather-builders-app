import { View, Text } from "react-native";
import { useWeather } from "../../hooks/useWeather";
import { useLocation } from "../../hooks/useLocation";
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
