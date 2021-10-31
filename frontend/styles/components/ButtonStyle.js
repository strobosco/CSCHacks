import { whiten } from "@chakra-ui/theme-tools";

export const ButtonStyle = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    "button-right": {
      ml: "auto",
      mr: "10",
      bg: "buttons",
      _hover: {
        bg: whiten("highlight", 20),
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
};
