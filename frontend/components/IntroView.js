import React, { useState } from "react";

import { Container, Flex, VStack } from "@chakra-ui/react";

import InputGrid from "./InputGrid";
import SongsList from "./SongsList";

const IntroView = () => {
  const [playlists, setPlaylists] = useState([]);

  return (
    <Container p={0} maxW="100%" width="80%" className="intro-container">
      <Flex>
        <VStack
          alignItems="flex-start"
          spacing={10}
          className="vertical-stack left-stack"
        >
          <div className="intro-text">
            <h2>Spotify Playlist Clustering</h2>
            <p>ADD DESCRIPTION</p>
          </div>
        </VStack>
        <VStack alignItems="flex-start" spacing={10} className="vertical-stack">
          <InputGrid playlists={playlists} setPlaylists={setPlaylists} />
        </VStack>
      </Flex>
      <SongsList songs={playlists} />
    </Container>
  );
};

export default IntroView;
