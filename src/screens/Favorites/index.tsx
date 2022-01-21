import { Background, WeatherCityCard } from "../../components";
import { useFavorites } from "../../hooks";
import { Container, List } from "./styles";

export function Favorites() {
  const { favorites } = useFavorites();
  return (
    <Background>
      <Container>
        <List>
          {favorites.map((city, index) => (
            <WeatherCityCard key={String(index)} city={city as string} />
          ))}
        </List>
      </Container>
    </Background>
  );
}
