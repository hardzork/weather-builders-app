import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 24}px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  /* margin-top: 20px; */
  /* flex: 1; */
`;
