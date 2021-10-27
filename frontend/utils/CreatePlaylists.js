const createPlaylists = async (token, playlistName, songs) => {
  const DESCRIPTION = "Playlist Created from SPotify K-Means";

  let user = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  let res = await axios.post(
    `https://api.spotify.com/v1/users/${user.data["display_name"]}/playlists`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: {
        name: playlistName,
        description: DESCRIPTION,
        public: true,
      },
    }
  );

  const PLAYLIST_ID = res.data.id;

  for (var song in songs) {
    let res = await axios.post(
      `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        data: {
          name: playlistName,
          description: DESCRIPTION,
          public: true,
        },
      }
    );
  }
};
