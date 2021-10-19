import React, { useEffect } from "react";

import { Flex } from "@chakra-ui/react";

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((acc, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    acc[key] = value;
    return acc;
  }, {});

  return paramsSplitUp;
};

const redirect = () => {
  useEffect(async () => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
      console.log(localStorage);

      window.location = "/";
    }
  });

  return (
    <Flex className="nav-bar">
      <h1>Thanks for authorizing Spotify!</h1>
      <br />
      <h2>You will be redirected shortly</h2>
    </Flex>
  );
};

export default redirect;
