import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const FavoriteTouchable = styled.TouchableOpacity`
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
type StarProps = {
  alreadyIsFavorite: boolean;
};
export const Star = styled(Ionicons).attrs((props: StarProps) => ({
  name: props.alreadyIsFavorite ? "md-star" : "md-star-outline",
  size: 40,
}))``;
