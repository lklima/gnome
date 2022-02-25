import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Outfit_300Light,
  Outfit_500Medium,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";

import Main from "./src/screens/Main";

import theme from "./src/global/styles/theme";

export default function App() {
  const [isFontLoad] = useFonts({
    Outfit_300Light,
    Outfit_500Medium,
    Outfit_700Bold,
  });

  if (!isFontLoad) {
    return <></>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
