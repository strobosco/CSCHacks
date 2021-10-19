import React, { useState, useEffect } from "react";

import {
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

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);
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
          let selectedPlaylists = [];
          checkedItems.map((item) => {
            // console.log(item);
            selectedPlaylists.push(playlists.items[item]);
          });
          // console.log(selectedPlaylists);
          let res = await axios.post(BACKEND_URL, {
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              accessToken: token,
              selectedPlaylists: JSON.stringify(selectedPlaylists),
            },
          });
          if (!res) {
            console.log("Error");
          }
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
