const createPlaylists = async (token, playlistName, songs, uris) => {
  // const DESCRIPTION = "Playlist Created from SPotify K-Means";
  // console.log(token);
  // console.log(playlistName);
  // console.log(songs);
  // console.log(uris);
  // let user = await axios.get("https://api.spotify.com/v1/me", {
  //   headers: {
  //     Authorization: "Bearer " + token,
  //   },
  // });
  // let res = await axios.post(
  //   `https://api.spotify.com/v1/users/${user.data["display_name"]}/playlists`,
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + token,
  //     },
  //     data: {
  //       name: playlistName,
  //       description: DESCRIPTION,
  //       public: true,
  //     },
  //   }
  // );
  // : -> %3A
  // , -> %2C
  //input.replace(/a/g, '4')
  uris = songs.join("%2C");
  uris.replace(":", "%3A", "g");
  const PLAYLIST_ID = res.data.id;
  // console.log(PLAYLIST_ID);
  // console.log(songs);
  let res = await axios.post(
    `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: {
        playlist_id: PLAYLIST_ID,
        uris: songs, // string object with , separated uris (has to be encoded)
      },
    }
  );
};

export default createPlaylists;
