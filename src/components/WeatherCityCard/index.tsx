import { addSeconds, format, parseISO } from "date-fns";
import { useMemo } from "react";
import { View, Text } from "react-native";
import { ptBR } from "date-fns/locale";

import {
  Container,
  InfoContainer,
  City,
  DateInfoContainer,
  DateIcon,
  DateInfo,
  TimeInfoContainer,
  TimeIcon,
  Time,
  TemperatureInfoContainer,
  Temperature,
  TemperatureDescription,
  Icon,
} from "./styles";

type WeatherCityCardProps = {
  cityName: string | undefined;
  country: string | undefined;
  temperature: string;
  temperatureDescription: string;
  icon: string;
  localDate: string | undefined;
  localTime: string | undefined;
};

export function WeatherCityCard({
  cityName,
  country,
  temperature,
  temperatureDescription,
  icon,
  localDate,
  localTime,
}: WeatherCityCardProps) {
  if (!temperature) {
    return <View></View>;
  }
  return (
    <Container>
      <InfoContainer>
        <City>
          {cityName}, {country}
        </City>
        <DateInfoContainer>
          <DateIcon />
          <DateInfo>{localDate}</DateInfo>
        </DateInfoContainer>
        <TimeInfoContainer>
          <TimeIcon />
          <Time>{localTime}</Time>
        </TimeInfoContainer>
        <TemperatureInfoContainer>
          <Temperature>{temperature}</Temperature>
          <TemperatureDescription>
            {temperatureDescription}
          </TemperatureDescription>
        </TemperatureInfoContainer>
      </InfoContainer>
      <View>
        <Icon source={{ uri: icon }} />
      </View>
    </Container>
  );
}
