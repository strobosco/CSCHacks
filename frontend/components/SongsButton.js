import React, { useState, useEffect } from "react";

import axios from "axios";

import { Container, Button, Flex, Checkbox } from "@chakra-ui/react";

const SongsButton = ({
  checkedItems,
  setCheckedItems,
  playlists,
  setPlaylists,
}) => {
  const [token, setToken] = useState("");
  const [tokenError, setTokenError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    } else {
      setTokenError("Please login before continuing!");
    }
  }, []);

  const handleGetPlaylists = async () => {
    const API_URL = "https://api.spotify.com/v1/me/playlists";
    const res = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setPlaylists(res.data);
  };

  return (
    <Container px="0" mx="0">
      <h1 className="step-element">Steps:</h1>
      <Flex flexDir="row" alignItems="center">
        <h1 className="step-element">1.</h1>
        <Button bg="buttons" onClick={handleGetPlaylists}>
          Get my playlists!
        </Button>
        <p className="token-error">{tokenError}</p>
      </Flex>
      <Flex flexDir="column" alignContent="flex-start">
        <h1 className="step-element">
          2. Choose which playlists you want to use:
        </h1>
        {playlists?.items
          ? playlists.items.map((item, idx) => (
              <Checkbox
                key={idx}
                onChange={() => setCheckedItems([...checkedItems, idx])}
              >
                {item.name}
              </Checkbox>
            ))
          : null}
      </Flex>
    </Container>
  );
};

export default SongsButton;
