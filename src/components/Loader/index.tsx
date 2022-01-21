import { Dimensions } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";

import { Container } from "./styles";

const { width } = Dimensions.get("screen");

export function Loader() {
  return (
    <Container>
      <ContentLoader
        speed={2}
        width={365}
        height={350}
        viewBox={`0 0 365 350`}
        backgroundColor={"#3F72AF"}
        style={{
          width: width + 20,
          marginHorizontal: "3%",
          paddingHorizontal: "1%",
        }}
      >
        <Rect x="0" y="0" rx="25" ry="25" width="365" height="350" />
      </ContentLoader>
    </Container>
  );
}
