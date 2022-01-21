import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 24}px;
`;

export const List = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,

  contentContainerStyle: {
    paddingVertical: 20,
  },
})``;
