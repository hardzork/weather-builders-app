import { Background } from "../../components/Background";
import { useState } from "react";
import { Container, ClearSearchButton, ClearSearchButtonLabel } from "./styles";
import { useWeather } from "../../hooks/useWeather";
import { SearchBox } from "../../components/SearchBox";
import { WeatherCityCard } from "../../components/WeatherCityCard";
import { WeatherInfoProps } from "../../context/WeatherContext";

export function Search() {
  const [search, setSearch] = useState("");
  const [resultCity, setResultCity] = useState<WeatherInfoProps>(
    {} as WeatherInfoProps
  );
  const { getWeatherInfoByCityName } = useWeather();

  async function handleSearch() {
    const response = await getWeatherInfoByCityName(search);
    if (response) {
      setResultCity(response);
    }
  }

  function handleCleanSearch() {
    setResultCity({} as WeatherInfoProps);
    setSearch("");
  }
  return (
    <Background>
      <Container>
        <SearchBox
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <WeatherCityCard
          cityName={resultCity.city_name}
          country={resultCity.country}
          temperature={resultCity.temp}
          temperatureDescription={resultCity.temp_description}
          icon={resultCity.icon}
          localDate={resultCity.date}
          localTime={resultCity.time}
        />
        {resultCity.city_name && (
          <ClearSearchButton onPress={handleCleanSearch}>
            <ClearSearchButtonLabel>Limpar pesquisa</ClearSearchButtonLabel>
          </ClearSearchButton>
        )}
      </Container>
    </Background>
  );
}
