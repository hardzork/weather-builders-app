import * as React from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";

export interface SearchProps {}

export function Search(props: SearchProps) {
  return (
    <Background>
      <Text>Search</Text>
    </Background>
  );
}
