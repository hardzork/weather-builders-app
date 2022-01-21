import {
  Background,
  WeatherHumidityInfoCard,
  WeatherMaxMinInfoCard,
  WeatherPressureInfoCard,
  WeatherPrincipalCard,
  WeatherWindInfoCard,
} from "../../components";

import { Container, Footer } from "./styles";

export function Home() {
  return (
    <Background>
      <Container>
        <WeatherPrincipalCard />
        <Footer>
          <WeatherMaxMinInfoCard />
          <WeatherPressureInfoCard />
          <WeatherHumidityInfoCard />
          <WeatherWindInfoCard />
        </Footer>
      </Container>
    </Background>
  );
}
