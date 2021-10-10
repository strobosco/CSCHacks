import React from "react";

import { Container, Flex, VStack } from "@chakra-ui/react";

const IntroView = () => {
  return (
    <Container p={0} maxW="100%" width="80%" className="intro-container">
      <Flex>
        <VStack spacing={10} className="vertical-stack">
          <div className="intro-text">
            <h2>Spotify Playlist Clustering</h2>
            <p>
              This simple web app utilizes the Spotify Web API to retrieve a
              users liked songs and create an amount of playlists chosen by the
              user.
            </p>
          </div>
        </VStack>
        <VStack spacing={10} className="vertical-stack"></VStack>
      </Flex>
    </Container>
  );
};

export default IntroView;
