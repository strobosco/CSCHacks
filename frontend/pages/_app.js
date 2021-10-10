import { ChakraProvider } from "@chakra-ui/react";
import { newTheme } from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={newTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
