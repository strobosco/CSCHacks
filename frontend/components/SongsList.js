import React from "react";

const SongsList = (props) => {
  return (
    <div>
      {props.songs.map((s) => (
        <p>{s}</p>
      ))}
    </div>
  );
};

export default SongsList;
