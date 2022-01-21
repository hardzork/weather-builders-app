import { View } from "react-native";

import { FavoriteButton } from "../FavoriteButton";

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
  SideContainer,
  FavoriteContainer,
  IconContainer,
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
      <SideContainer>
        <FavoriteContainer>
          <FavoriteButton city={cityName as string} />
        </FavoriteContainer>
        <IconContainer>
          <Icon source={{ uri: icon }} />
        </IconContainer>
      </SideContainer>
    </Container>
  );
}
