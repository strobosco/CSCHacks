import React, { useState } from "react";

import { Container, Flex, VStack } from "@chakra-ui/react";

import InputGrid from "./InputGrid";
import SongsList from "./SongsList";

const IntroView = () => {
  const [playlists, setPlaylists] = useState([]);
  const [rootName, setRootName] = useState("");

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
          <InputGrid setPlaylists={setPlaylists} setRootName={setRootName} />
        </VStack>
      </Flex>
      <SongsList songs={playlists} rootName={rootName} />
    </Container>
  );
};

export default IntroView;
