import Head from "next/head";

import { Flex, Heading, Button } from "@chakra-ui/react";
import IntroView from "../components/IntroView";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="CSC Hacks Spotify clustering web app"
        ></meta>
        <title>Spotify Playlist Clustering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex className="nav-bar">
        <Heading>Spotify Playlist Clustering</Heading>
        <Button variant="button-right">Spotiy Login</Button>
      </Flex>
      <IntroView />
      <Footer />
    </>
  );
}
