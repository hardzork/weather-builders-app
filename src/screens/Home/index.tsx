import * as React from "react";
import { Text, View } from "react-native";

import { Background } from "../../components/Background";
import { WeatherInfoCard } from "../../components/WeatherInfoCard";
import { WeatherPrincipalCard } from "../../components/WeatherPrincipalCard";

import { Container, Footer } from "./styles";

export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Background>
      <Container>
        <WeatherPrincipalCard />
        <Footer>
          <WeatherInfoCard />
          <WeatherInfoCard />
          <WeatherInfoCard />
          <WeatherInfoCard />
        </Footer>
      </Container>
    </Background>
  );
}
