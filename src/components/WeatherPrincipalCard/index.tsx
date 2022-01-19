import * as React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  LocationInfoContainer,
  Location,
  TimeInfo,
  Date,
  Time,
  IconContainer,
} from "./styles";

export interface WeatherPrincipalCardProps {}

export function WeatherPrincipalCard(props: WeatherPrincipalCardProps) {
  return (
    <Container>
      <Header>
        <LocationInfoContainer>
          <Location>Belém, BR</Location>
          <TimeInfo>
            <Date>Qua. 19 de jan.</Date>
            <Time>00:08</Time>
          </TimeInfo>
        </LocationInfoContainer>
        <IconContainer>
          <Image
            source={{ uri: "https://openweathermap.org/img/wn/10d@2x.png" }}
            style={{ width: 100, height: 100 }}
          />
        </IconContainer>
      </Header>
    </Container>
  );
}
