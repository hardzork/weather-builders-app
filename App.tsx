import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Background } from "./src/components/Background";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" />
      <Background>
        <Text>welcome</Text>
      </Background>
    </>
  );
}
