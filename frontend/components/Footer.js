import React from "react";

import { Box, Flex, Container, IconButton, Icon } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container
          mt={8}
          w="80%"
          mx="auto"
          bg="secondary"
          color="white"
          maxWidth="100%"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.5)"
          borderRadius="8px"
        >
          <div className="intro-text">
            <h2>Connect with us!</h2>
          </div>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
