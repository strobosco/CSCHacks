import Document, { Html, Head, Main, NextScript } from "next/document";

import { ColorModeScript } from "@chakra-ui/react";
import { newTheme } from "../styles/index";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript
            initialColorMode={newTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
