import { View } from "react-native";
import { useLocation } from "../../hooks/useLocation";
import { useWeather } from "../../hooks/useWeather";

import {
  Container,
  IconContainer,
  Icon,
  InfoContainer,
  MaxInfoContainer,
  MaxLabel,
  Max,
  MinInfoContainer,
  MinLabel,
  Min,
} from "./styles";
export interface WeatherMaxMinInfoCardProps {}

export function WeatherMaxMinInfoCard(props: WeatherMaxMinInfoCardProps) {
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
      <InfoContainer>
        <MaxInfoContainer>
          <MaxLabel>MAX</MaxLabel>
          <Max>{weather.temp_max}</Max>
        </MaxInfoContainer>
        <MinInfoContainer>
          <MinLabel>MIN</MinLabel>
          <Min>{weather.temp_min}</Min>
        </MinInfoContainer>
      </InfoContainer>
    </Container>
  );
}
