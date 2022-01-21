import { SetStateAction, Dispatch } from "react";
import { Keyboard } from "react-native";

import { Container, SearchInput, IconTouchableContainer, Icon } from "./styles";

type SearchBoxProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
};

export function SearchBox({ search, setSearch, handleSearch }: SearchBoxProps) {
  return (
    <Container>
      <SearchInput
        value={search}
        onChangeText={(value: string) => setSearch(value)}
        placeholder="Ex: Porto Alegre"
        returnKeyType="send"
        onSubmitEditing={handleSearch}
      />
      <IconTouchableContainer onPress={handleSearch}>
        <Icon />
      </IconTouchableContainer>
    </Container>
  );
}
