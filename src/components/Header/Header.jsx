import React from 'react';
import { Box, Button, Flex, Heading, HStack, Tooltip } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = () => {
  return (
    <Flex justify="space-between" align="center" direction="row">
      <Box display="flex" alignItems="center" p="4">
        <Heading>Astro News</Heading>
      </Box>

      <HStack>
        <Button mr='4' >Home</Button>
        <Button >About</Button>
        <Tooltip hasArrow label="Dark Mode">
          <Box>
            <ColorModeSwitcher />
          </Box>
        </Tooltip>
      </HStack>
    </Flex>
  );
};

export default Header;
