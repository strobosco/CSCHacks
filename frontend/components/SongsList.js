import React from "react";

const SongsList = (songs) => {
  console.log(songs);
  console.log(songs.songs.length);
  console.log(songs.songs.map((s) => console.log(s)));
  return (
    <div>
      {songs.songs.map((s) => (
        <p>{s}</p>
      ))}
    </div>
  );
};

export default SongsList;
