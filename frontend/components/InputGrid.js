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

const BACKEND_URL = "/cluster";

const InputGrid = () => {
  const [playlists, setPlaylists] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [token, setToken] = useState("");
  const [results, setResults] = useState([]);
  const songs = [];

  useEffect(async () => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const createSongs = () => {
    for (var playlist in results.data) {
      // console.log(results.data[playlist]);
      const tempSongs = [];
      for (var song in results.data[playlist]) {
        // console.log(results.data[playlist][song]);
        tempSongs.push(results.data[playlist][song]);
      }
      songs.push(tempSongs);
      console.log(songs);
    }
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
          // console.log(values);
          // console.log(checkedItems);
          // console.log(playlists.items);
          // console.log("befor sel pl");
          let userSelectedPlaylists = [];
          checkedItems.map((item) => {
            // console.log(item);
            userSelectedPlaylists.push(playlists.items[item]);
          });
          // console.log("after sel pl", userSelectedPlaylists);
          // console.log("before user");
          let user = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          // console.log("after iser");
          // console.log(user.data["display_name"]);
          // console.log(token);
          // console.log(userSelectedPlaylists);
          // console.log(values.numberOfPlaylists);
          // console.log("before res");
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
          console.log("after res", res);
          setResults(res);
          createSongs();
          // console.log("res", results);
          // setTimeout(console.log("playlists", results), 200);
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
    </>
  );
};

export default InputGrid;
