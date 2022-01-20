import { useWeather } from "../../hooks/useWeather";
import {
  Container,
  Icon,
  IconContainer,
  WindInfoContainer,
  WindLabel,
  WindSpeed,
  WindDirection,
} from "./styles";

export interface WeatherWindInfoCardProps {}

export function WeatherWindInfoCard(props: WeatherWindInfoCardProps) {
  const { weather } = useWeather();
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
