import React from "react";

import { Box, Flex, Container, IconButton, Icon } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container maxW="100%" width="80%" className="footer-container">
          <div className="intro-text">
            <h2>Connect with us!</h2>
            <p>Reach out to us with any questions, concerns, or suggestions!</p>
          </div>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
