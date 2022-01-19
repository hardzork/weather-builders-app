import { RefreshControl } from "react-native";
import { useWeather } from "../../hooks/useWeather";
import {
  Scroll,
  Container,
  Header,
  LocationInfoContainer,
  Location,
  TimeInfo,
  DateContainer,
  DateIcon,
  Date,
  TimeContainer,
  TimeIcon,
  Time,
  IconContainer,
  TemperatureContainer,
  Temperature,
  Description,
  RefreshInfoContainer,
  RefreshInfo,
  Icon,
} from "./styles";

export function WeatherPrincipalCard() {
  const { loading, weather, getWeatherInfo } = useWeather();

  return (
    <Scroll
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getWeatherInfo} />
      }
    >
      <Container>
        <Header>
          <LocationInfoContainer>
            <Location>{weather.location}</Location>
            <TimeInfo>
              <DateContainer>
                <DateIcon />
                <Date>{weather.date}</Date>
              </DateContainer>
              <TimeContainer>
                <TimeIcon />
                <Time>{weather.time}</Time>
              </TimeContainer>
            </TimeInfo>
          </LocationInfoContainer>
          <IconContainer>
            <Icon source={{ uri: weather.icon }} />
          </IconContainer>
        </Header>
        <TemperatureContainer>
          <Temperature>{weather.temp}</Temperature>
          <Description>{weather.temp_description}</Description>
        </TemperatureContainer>
        <RefreshInfoContainer>
          <RefreshInfo>PUXE PARA ATUALIZAR</RefreshInfo>
        </RefreshInfoContainer>
      </Container>
    </Scroll>
  );
}
