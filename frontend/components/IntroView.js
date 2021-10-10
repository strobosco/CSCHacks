import React from "react";

import { Container, Flex, VStack } from "@chakra-ui/react";

const IntroView = () => {
  return (
    <Container mt={10} mx="auto" w="80%" maxW="100%">
      <Flex>
        <VStack
          w="full"
          h="full"
          p={5}
          spacing={10}
          borderRadius="8px"
          bg="secondary"
          color="white"
          alignItems="flex-start"
        >
          <div className="intro-text">
            <h2>Spotify Playlist Clustering</h2>
            <p>
              This simple web app utilizes the Spotify Web API to retrieve a
              users liked songs and create an amount of playlists chosen by the
              user.
            </p>
          </div>
        </VStack>
        <VStack
          w="full"
          h="full"
          p={5}
          spacing={10}
          borderRadius="8px"
          bg="secondary"
          alignItems="flex-start"
        ></VStack>
      </Flex>
    </Container>
  );
};

export default IntroView;
