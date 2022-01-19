import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const BackgroundGradient = styled(LinearGradient).attrs({
  colors: ["#3F72AF", "#DBE2EF"],
})`
  flex: 1;
`;
