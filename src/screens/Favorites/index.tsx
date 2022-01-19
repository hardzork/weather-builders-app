import * as React from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";

export interface FavoritesProps {}

export function Favorites(props: FavoritesProps) {
  return (
    <Background>
      <Text>Favorites</Text>
    </Background>
  );
}
