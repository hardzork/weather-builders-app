import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  width: 22%;
  height: 120px;
  /* justify-content: space-around; */
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  align-items: center;
  padding-top: 10px;
`;

export const IconContainer = styled.View`
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(AntDesign).attrs((props) => ({
  name: "dashboard",
  size: 20,
}))`
  color: #000;
`;

export const PressureInfoContainer = styled.View`
  margin: 2px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const PressureLabel = styled.Text`
  font-size: 10px;
  text-transform: uppercase;
`;
export const Pressure = styled.Text`
  font-weight: bold;
`;
