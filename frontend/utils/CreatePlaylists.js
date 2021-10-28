import axios from "axios";

const createPlaylists = async (token, playlistName, songs, uris) => {
  const DESCRIPTION = "Playlist Created from SPotify K-Means";
  console.log(token);
  console.log(playlistName);
  console.log(songs);
  console.log(uris);
  let user = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  console.log(user.data["display_name"]);
  const CREATE_URL = `https://api.spotify.com/v1/users/${user.data["display_name"]}/playlists`;
  console.log(CREATE_URL);
  let playlistCreation = await axios
    .post(CREATE_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: {
        name: playlistName,
        description: DESCRIPTION,
        public: true,
      },
    })
    .catch((error) => console.log(error));
  console.log(playlistCreation);
  // : -> %3A
  // , -> %2C
  // input.replace(/a/g, '4')
  // uris = songs.join("%2C");
  // uris.replace(":", "%3A", "g");
  // const PLAYLIST_ID = playlistCreation.data.id;
  // console.log(PLAYLIST_ID);
  // console.log(songs);
  // let res2 = await axios.post(
  //   `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`,
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + token,
  //     },
  //     data: {
  //       playlist_id: PLAYLIST_ID,
  //       uris: songs, // string object with , separated uris (has to be encoded)
  //     },
  //   }
  // );
};

export default createPlaylists;
