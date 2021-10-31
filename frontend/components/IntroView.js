import React, { useState } from "react";

import { Container, Flex, VStack } from "@chakra-ui/react";

import InputGrid from "./InputGrid";
import SongsList from "./SongsList";

import { DESCRIPTION } from "../utils/Description";

const IntroView = () => {
  const [playlists, setPlaylists] = useState([]);
  const [uris, setUris] = useState([]);
  const [rootName, setRootName] = useState("");

  return (
    <Container maxW="100%" width="80%" className="intro-container">
      <Flex>
        <VStack
          alignItems="flex-start"
          spacing={10}
          className="vertical-stack left-stack"
        >
          <div className="intro-text">
            <h2>Spotify Playlist Clustering</h2>
            <p>{DESCRIPTION}</p>
          </div>
        </VStack>
        <VStack alignItems="flex-start" spacing={10} className="vertical-stack">
          <InputGrid
            setPlaylists={setPlaylists}
            setRootName={setRootName}
            setUris={setUris}
          />
        </VStack>
      </Flex>
      <SongsList songs={playlists} rootName={rootName} uris={uris} />
    </Container>
  );
};

export default IntroView;
