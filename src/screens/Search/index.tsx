import { Background } from "../../components/Background";
import { useState } from "react";
import {
  Container,
  ClearSearchButton,
  ClearSearchButtonLabel,
  Content,
} from "./styles";
import { SearchBox } from "../../components/SearchBox";
import { WeatherCityCard } from "../../components/WeatherCityCard";

export function Search() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  async function handleSearch() {
    setCity(search);
  }

  function handleCleanSearch() {
    setSearch("");
    setCity("");
  }
  return (
    <Background>
      <Container>
        <SearchBox
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <Content>
          <WeatherCityCard city={city} />
        </Content>
        {search.length > 0 && (
          <ClearSearchButton onPress={handleCleanSearch}>
            <ClearSearchButtonLabel>Limpar pesquisa</ClearSearchButtonLabel>
          </ClearSearchButton>
        )}
      </Container>
    </Background>
  );
}
