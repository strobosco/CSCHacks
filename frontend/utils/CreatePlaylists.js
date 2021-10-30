import axios from "axios";

const createPlaylists = async (token, playlistName, songs, uris) => {
  const DESCRIPTION = "Playlist Created from SPotify K-Means";
  console.log(uris);
  let user = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const CREATE_URL = `https://api.spotify.com/v1/users/${user.data["display_name"]}/playlists`;
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
  console.log(playlistCreation);

  const PLAYLIST_ID = playlistCreation.data.id;
  console.log("uris ", uris);
  const ADD_SONGS_URL = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`;
  let addingSongs = await axios.post(
    ADD_SONGS_URL,
    {
      uris: uris,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export default createPlaylists;
