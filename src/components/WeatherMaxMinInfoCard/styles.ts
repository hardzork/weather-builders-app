import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 22%;
  height: 120px;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  align-items: center;
  padding-top: 10px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;
export const Icon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: "coolant-temperature",
  size: 20,
}))`
  color: #000;
`;
export const InfoContainer = styled.View`
  margin: auto;
`;
export const MaxInfoContainer = styled.View`
  margin: 2px;
  justify-content: center;
  align-items: center;
`;
export const MaxLabel = styled.Text`
  font-size: 10px;
`;
export const Max = styled.Text`
  font-weight: bold;
`;
export const MinInfoContainer = styled.View`
  margin: 2px;
  justify-content: center;
  align-items: center;
`;
export const MinLabel = styled.Text`
  font-size: 10px;
`;
export const Min = styled.Text`
  font-weight: bold;
`;
