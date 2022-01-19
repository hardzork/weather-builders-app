import styled from "styled-components/native";

export const Container = styled.View`
  /* align-items: center; */
  height: 40%;
  margin-left: 3%;
  margin-right: 3%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
`;

export const Header = styled.View`
  height: 30%;
  /* background-color: rgba(255, 255, 255, 0.1); */
  flex-direction: row;
`;
export const LocationInfoContainer = styled.View`
  flex: 2;
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
  background-color: rgba(255, 255, 255, 0.1);
  flex: 1;
  z-index: 10;
`;
