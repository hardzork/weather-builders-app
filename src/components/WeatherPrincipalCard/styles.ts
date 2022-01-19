import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

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
  background-color: rgba(255, 255, 255, 0.1);
  flex-direction: row;
`;
export const LocationInfoContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;
export const Location = styled.Text`
  flex: 1;
`;
export const TimeInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Date = styled.Text``;
export const Time = styled.Text``;
export const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TemperatureContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  height: 50%;
  justify-content: center;
  align-items: center;
`;
export const Temperature = styled.Text``;
export const Description = styled.Text``;
export const RefreshInfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const RefreshInfo = styled.Text``;
