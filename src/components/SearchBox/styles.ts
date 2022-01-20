import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  align-items: center;
  margin: 5% 5% 10% 5%;
  justify-content: center;
  flex-direction: row;
  background-color: #ddd;
  height: 50px;
  border-radius: 8px;
`;

export const SearchInput = styled.TextInput`
  width: 85%;
  height: 50px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  justify-content: center;
  padding: 7px;
`;

export const IconTouchableContainer = styled.TouchableOpacity`
  width: 15%;
  background-color: #3e3e3e;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Icon = styled(Feather).attrs((props) => ({
  name: "search",
  size: 24,
}))`
  color: #fff;
`;
