import * as React from "react";
import { Text, View } from "react-native";

import { Background } from "../../components/Background";
import { WeatherPrincipalCard } from "../../components/WeatherPrincipalCard";

import { Container } from "./styles";

export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Background>
      <Container>
        <WeatherPrincipalCard />
      </Container>
    </Background>
  );
}
