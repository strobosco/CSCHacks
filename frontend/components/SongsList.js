import React, { useEffect, useState } from "react";

import { Container, Flex, Button, Divider } from "@chakra-ui/react";

import createPlaylists from "../utils/CreatePlaylists";

const SongsList = ({ songs, rootName, uris }) => {
  const [token, setToken] = useState("");
  useEffect(async () => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  return (
    <Container maxW="100%" width="100%" className="playlist-container">
      {songs.map((s, idx) => (
        <>
          <Flex key={`${idx}_flex`} py={3} flexDir="row">
            <div key={`${idx}_div`} className="playlist-div">
              <Flex key={`${idx}_title`} flexDir="row">
                <h1 key={`${idx}_h1`}>{`${rootName}_${idx + 1}`}</h1>
                <h2 key={`${idx}_h2`}>{s.length} songs</h2>
              </Flex>
              <p key={`${idx}_p`}>{s.join(", ")}</p>
            </div>
            <Button
              key={`${idx}_b`}
              bg="buttons"
              onClick={() => {
                createPlaylists(
                  token,
                  `${rootName}_${idx + 1}`,
                  songs,
                  uris[idx]
                );
              }}
            >
              Create
            </Button>
          </Flex>
          <Divider key={`${idx}_divider`} width="60%" mx="auto" my={6} />
        </>
      ))}
    </Container>
  );
};

export default SongsList;
