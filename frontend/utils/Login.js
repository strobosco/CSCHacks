const CLIENT_ID = "c5455611ee7e4367b44da7d1a6f3d15b";
const AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://localhost:3000/redirect";
const SCOPES = [
  "user-read-email",
  "user-library-read",
  "user-library-modify",
  "user-top-read",
  "playlist-modify-public",
];

const SCOPES_URL_PARAM = SCOPES.join("%20");

export const FULL_AUTH_URL = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scopes=${SCOPES_URL_PARAM}&response_type=token&state=123`;
