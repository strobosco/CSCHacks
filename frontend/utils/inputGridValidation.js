export const validateNumberOfPlaylists = async (value) => {
  let error;
  if ((value === null) | undefined) {
    error = "Number is required!";
  } else if (value < 1) {
    error = "Must create at least 1 playlist!";
  }
  return error;
};

export const validateBaseName = async (value) => {
  let error;
  if ((value === null) | undefined) {
    error = "Base name is required!";
  } else if (value.length < 5) {
    error = "Length must be more than 5 characters!";
  }
  return error;
};
