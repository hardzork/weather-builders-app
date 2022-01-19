import { RefreshControl, View } from "react-native";
import { useLocation } from "../../hooks/useLocation";
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
  const { location, granted, date, time, completed } = useLocation();
  const { loading, weather, getWeatherInfo } = useWeather();

  if (!completed) {
    return <View></View>;
  }
  return (
    <Scroll
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getWeatherInfo} />
      }
    >
      <Container>
        <Header>
          <LocationInfoContainer>
            <Location>
              {location.address.city}, {location.address.isoCountryCode}
            </Location>
            <TimeInfo>
              <DateContainer>
                <DateIcon />
                <Date>{date}</Date>
              </DateContainer>
              <TimeContainer>
                <TimeIcon />
                <Time>{time}</Time>
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
