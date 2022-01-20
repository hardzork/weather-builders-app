import { useState } from "react";
import { RefreshControl, View, Text } from "react-native";
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
  FeelsLike,
  Description,
  RefreshInfoContainer,
  RefreshInfo,
  Icon,
} from "./styles";

export function WeatherPrincipalCard() {
  const { location, date, time, completed, getLocation } = useLocation();
  const { weather, getWeatherInfo } = useWeather();
  const [refreshing, setRefreshing] = useState(false);
  if (!completed) {
    return <View></View>;
  }
  const onRefresh = async () => {
    setRefreshing(true);
    await getLocation();
    await getWeatherInfo();
    setRefreshing(false);
  };
  return (
    <Scroll
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Container>
        <Header>
          <LocationInfoContainer>
            <Location>
              {location.address.street}, {location.address.streetNumber}
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
          <Location>
            {location.address.city || location.address.subregion},{" "}
            {location.address.isoCountryCode}
          </Location>
          <Temperature>{weather.temp}</Temperature>
          <FeelsLike>sensação de {weather.feels_like}</FeelsLike>
          <Description>{weather.temp_description}</Description>
        </TemperatureContainer>
        <RefreshInfoContainer>
          <RefreshInfo>PUXE PARA ATUALIZAR</RefreshInfo>
        </RefreshInfoContainer>
      </Container>
    </Scroll>
  );
}
