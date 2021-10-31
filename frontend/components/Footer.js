import React from "react";

import { Box, Flex, Container, IconButton, Icon } from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container maxW="100%" width="80%" className="footer-container">
          <Flex align="center" justify="space-between" wrap="wrap">
            <div className="intro-text">
              <h2>Connect with us!</h2>
              <p>
                Reach out to us with any questions, concerns, or suggestions!
              </p>
            </div>
            <IconButton
              aria-label="GitHub"
              as="a"
              href="https://github.com/strobosco/CSCHacks"
              rel="noopener noreferrer"
              target="_blank"
              icon={<Icon as={GrGithub} fontSize="60px" bg="secondary" />}
            />
          </Flex>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
