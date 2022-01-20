import * as React from "react";
import { Text, View } from "react-native";

import { Background } from "../../components/Background";
import { WeatherHumidityInfoCard } from "../../components/WeatherHumidityInfoCard";
import { WeatherMaxMinInfoCard } from "../../components/WeatherMaxMinInfoCard";
import { WeatherPressureInfoCard } from "../../components/WeatherPressureInfoCard";
import { WeatherPrincipalCard } from "../../components/WeatherPrincipalCard";
import { WeatherWindInfoCard } from "../../components/WeatherWindInfoCard";

import { Container, Footer } from "./styles";

export interface HomeProps {}

export function Home(props: HomeProps) {
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
