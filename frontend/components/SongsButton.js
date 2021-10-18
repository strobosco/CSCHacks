import React, { useState, useEffect } from "react";

import axios from "axios";

import { Container, Button } from "@chakra-ui/react";

const SongsButton = () => {
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetPlaylists = async () => {
    const API_URL = "https://api.spotify.com/v1/me/playlists";
    const res = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res);
    setSongs(res.data);
  };

  return (
    <Container>
      <Button onClick={handleGetPlaylists}>Get my songs!</Button>
      {songs?.items
        ? songs.items.map((item, idx) => <p key={idx}>{item.name}</p>)
        : null}
    </Container>
  );
};

export default SongsButton;
