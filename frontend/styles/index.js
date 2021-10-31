import { extendTheme } from "@chakra-ui/react";

import { ButtonStyle as Button } from "./components/ButtonStyle";
import { globals } from "./globals/globals";

export const newTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Gill Sans",
    heading: "Gill Sans",
  },
  colors: {
    primary: "#545F66",
    secondary: "#5E6876",
    buttons: "#45A49D",
    error: "#C93028",
  },
  components: {
    Button,
  },
  styles: {
    global: globals,
  },
});
