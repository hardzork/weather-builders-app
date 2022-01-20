import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 24}px;
  /* align-items: center; */
`;

export const ClearSearchButton = styled.TouchableOpacity`
  bottom: 0px;
  margin: 5%;
  /* width: 100%; */
  position: absolute;
  width: 90%;
  height: 56px;
  background-color: #3e3e3e;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
export const ClearSearchButtonLabel = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
