import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("screen");

export const Scroll = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    marginVertical: 20,
    height: height / 3,
  },
}))`
  max-height: ${height / 1.5}px;
`;

export const Container = styled.View`
  height: 100%;
  margin-left: 3%;
  margin-right: 3%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
`;
export const Header = styled.View`
  height: 40%;
  flex-direction: row;
`;
export const LocationInfoContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;
export const Location = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const TimeInfo = styled.View`
  justify-content: space-between;
  align-items: flex-start;
`;
export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const DateIcon = styled(Feather).attrs((props) => ({
  name: "calendar",
}))`
  color: #333333;
  margin-right: 4px;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #333333;
  font-style: italic;
`;
export const TimeContainer = styled.View`
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
export const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 150px;
  height: 150px;
`;

export const TemperatureContainer = styled.View`
  height: 50%;
  justify-content: center;
  align-items: center;
`;
export const Temperature = styled.Text`
  font-size: 52px;
  font-weight: bold;
`;

export const FeelsLike = styled.Text`
  font-size: 12px;
  color: #333333;
  font-style: italic;
`;
export const Description = styled.Text`
  font-size: 16px;
  color: #333333;
  font-style: italic;
  text-transform: capitalize;
`;
export const RefreshInfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #d7e2e9;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
export const RefreshInfo = styled.Text`
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  color: #3e3e3e;
`;
