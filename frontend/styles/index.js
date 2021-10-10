import { extendTheme } from "@chakra-ui/react";

import { ButtonStyle as Button } from "./components/ButtonStyle";

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
    primary: "#845EC2",
    secondary: "#006089",
    highlight: "#00B796",
    warning: "#F9F871",
    danger: "#C34A36",
  },
  components: {
    Button,
  },
  styles: {
    global: {
      "*": {
        fontFamily: "Gill Sans",
      },
      ".nav-bar": {
        width: "80%",
        mx: "auto",
        position: "sticky",
        zIndex: "1",
        backgroundColor: "secondary",
        borderRadius: "6px",
        top: "0",
        padding: "5",
        flexDirection: "row",
        color: "white",
      },
      ".intro-text": {
        h2: {
          color: "white",
          fontSize: "24px",
        },
        p: {
          color: "white",
          fontSize: "18px",
          pt: "8px",
        },
      },
    },
  },
});
