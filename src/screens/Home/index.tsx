import * as React from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";

export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Background>
      <Text>Home</Text>
    </Background>
  );
}
