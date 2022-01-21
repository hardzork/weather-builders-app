import { useState } from "react";
import { Keyboard } from "react-native";
import { Background, SearchBox, WeatherCityCard } from "../../components";

import {
  Container,
  ClearSearchButton,
  ClearSearchButtonLabel,
  Content,
} from "./styles";

export function Search() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  function handleSearch() {
    setCity(search);
    Keyboard.dismiss();
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
