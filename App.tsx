import { ThemeProvider } from "styled-components/native";

import Main from "./src/screens/Main";

import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
