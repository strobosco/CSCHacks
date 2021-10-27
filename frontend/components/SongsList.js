import React, { useEffect } from "react";

import { Container } from "@chakra-ui/react";

const SongsList = ({ songs, rootName }) => {
  return (
    <Container maxW="100%" width="100%" className="playlist-container">
      {songs.map((s, idx) => (
        <div className="playlist-div">
          <h1
            key={`${idx}_h1`}
            className="playlist-text"
          >{`${rootName}_${idx}`}</h1>
          <p key={idx} className="playlist-text">
            {s.join(", ")}
          </p>
        </div>
      ))}
    </Container>
  );
};

export default SongsList;
