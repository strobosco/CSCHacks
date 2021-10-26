import React, { useState, useEffect } from "react";

import {
  Container,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

import axios from "axios";

import {
  validateBaseName,
  validateNumberOfPlaylists,
} from "../utils/inputGridValidation";
import SongsButton from "./SongsButton";
import SongsList from "./SongsList";

const BACKEND_URL = "/cluster";

const InputGrid = () => {
  const [playlists, setPlaylists] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [token, setToken] = useState("");
  const [childSongs, setChildSongs] = useState([]);
  const [found, setFound] = useState(false);
  var results = [];

  useEffect(async () => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const createSongs = async () => {
    setChildSongs([]);
    // console.log(Object.keys(results[0]));
    for (var playlist in results[0]) {
      var tempSongs = [];
      for (var song in results[0][playlist]) {
        tempSongs.push(results[0][playlist][song]);
      }
      // console.log(tempSongs);
      setChildSongs((childSongs) => [...childSongs, tempSongs]);
    }
    // console.log(childSongs);
    // childSongs.map((song) => song.map((playlist) => console.log(playlist)));
  };

  return (
    <>
      <SongsButton
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        playlists={playlists}
        setPlaylists={setPlaylists}
      />
      <Formik
        initialValues={{
          numberOfPlaylists: "",
          baseName: "",
        }}
        onSubmit={async (values, actions) => {
          results = [];
          let userSelectedPlaylists = [];
          checkedItems.map((item) => {
            // console.log(item);
            userSelectedPlaylists.push(playlists.items[item]);
          });
          let user = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });

          let res = await axios.post(BACKEND_URL, {
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              username: user.data["display_name"],
              accessToken: token,
              selectedPlaylists: JSON.stringify(userSelectedPlaylists),
              userNumberOfPlaylists: values.numberOfPlaylists,
            },
          });
          results.push(res.data);
          await createSongs();
          setFound(true);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <Field
              name="numberOfPlaylists"
              validate={validateNumberOfPlaylists}
            >
              {({ field, form }) => (
                <FormControl
                  id="numberOfPlaylists"
                  isInvalid={
                    form.errors.numberOfPlaylists &&
                    form.touched.numberOfPlaylists
                  }
                >
                  <FormLabel htmlFor="numberOfPlaylists">
                    How many playlists do you want to generate?
                  </FormLabel>
                  <Input
                    {...field}
                    id="numberOfPlaylists"
                    type="number"
                    placeholder="1, 2, 3, ..."
                  />
                  <FormErrorMessage>
                    {form.errors.numberOfPlaylists}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="baseName" validate={validateBaseName}>
              {({ field, form }) => (
                <FormControl
                  id="baseName"
                  isInvalid={form.errors.baseName && form.touched.baseName}
                >
                  <FormLabel htmlFor="baseName">
                    Insert the base name for the new playlists:
                  </FormLabel>
                  <Input
                    {...field}
                    id="baseName"
                    type="text"
                    placeholder="My New Playlist..."
                  />
                  <FormErrorMessage>{form.errors.baseName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              bg="highlight"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      {found && <SongsList songs={childSongs} />}
    </>
  );
};

export default InputGrid;
