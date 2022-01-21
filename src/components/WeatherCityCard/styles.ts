import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  margin-left: 5%;
  margin-right: 5%;
  padding: 20px;
  flex-direction: row;
  margin-bottom: 20px;
  height: 200px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const City = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DateInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateIcon = styled(Feather).attrs((props) => ({
  name: "calendar",
}))`
  color: #333333;
  margin-right: 4px;
`;

export const DateInfo = styled.Text`
  font-size: 12px;
  color: #333333;
  font-style: italic;
`;

export const TimeInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeIcon = styled(Feather).attrs((props) => ({
  name: "clock",
}))`
  color: #333333;
  margin-right: 4px;
`;

export const Time = styled.Text`
  font-size: 12px;
  color: #333333;
  font-style: italic;
`;

export const TemperatureInfoContainer = styled.View`
  height: 50%;
  justify-content: center;
  align-items: center;
`;
export const Temperature = styled.Text`
  font-size: 52px;
  font-weight: bold;
`;

export const TemperatureDescription = styled.Text``;

export const Icon = styled.Image`
  width: 150px;
  height: 150px;
`;

export const SideContainer = styled.View`
  flex: 1;
`;
export const FavoriteContainer = styled.View`
  align-items: flex-end;
  /* background-color: #000; */
`;

export const IconContainer = styled.View``;
