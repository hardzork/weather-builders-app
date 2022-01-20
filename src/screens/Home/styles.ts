import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 24}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
`;
