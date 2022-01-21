import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 22%;
  height: 120px;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  padding-top: 10px;
`;

export const IconContainer = styled.View`
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: "air-humidifier",
  size: 20,
}))`
  color: #000;
`;

export const HumidityInfoContainer = styled.View`
  margin: 2px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const HumidityLabel = styled.Text`
  font-size: 10px;
  text-transform: uppercase;
`;
export const Humidity = styled.Text`
  font-weight: bold;
`;
