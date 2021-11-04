import axios from "axios";

const createPlaylists = async (token, playlistName, songs, uris) => {
  const DESCRIPTION = "Playlist Created from SPotify K-Means";
  let user = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const CREATE_URL = `https://api.spotify.com/v1/users/${user.data["id"]}/playlists`;
  let playlistCreation = await axios
    .post(
      CREATE_URL,
      {
        name: playlistName,
        description: DESCRIPTION,
        public: true,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .catch((error) => console.log(error));

  const PLAYLIST_ID = playlistCreation.data.id;
  const ADD_SONGS_URL = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`;
  let i = 0;
  while (i < uris.length) {
    let addingSongs = await axios.post(
      ADD_SONGS_URL,
      {
        uris: uris.slice(i, i + 49),
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    i += 50;
  }
};

export default createPlaylists;
