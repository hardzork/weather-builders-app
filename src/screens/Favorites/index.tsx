import * as React from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { WeatherCityCard } from "../../components/WeatherCityCard";
import { useFavorites } from "../../hooks/useFavorites";
import { Container, List } from "./styles";

export interface FavoritesProps {}

export function Favorites(props: FavoritesProps) {
  const { favorites } = useFavorites();
  // console.log(favorites);
  return (
    <Background>
      <Container>
        <List
        // data={favorites}
        // keyExtractor={(_, index) => String(index)}
        // renderItem={({ item }) => <WeatherCityCard city={item as string} />}
        >
          {favorites.map((city, index) => (
            <WeatherCityCard key={String(index)} city={city as string} />
          ))}
        </List>
      </Container>
    </Background>
  );
}
