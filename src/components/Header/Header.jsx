import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcHome, FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = () => {

  const bgColor=useColorModeValue('gray.200','');
  const buttonBgColor=useColorModeValue('teal.200','');
  return (
    <>
      <Flex justify="space-between" align="center" direction="row" bg={bgColor} >
        <Box display="flex" alignItems="center" p="4">
          <Heading>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={['2xl', '2xl', '5xl', '5xl']}
              fontWeight="extrabold"
            >
              Astro News
            </Text>
          </Heading>
        </Box>

        <HStack mr='4'>
          <Link to="/">
            <Button  bgColor={buttonBgColor} _hover={{bgColor:'teal.300'}} leftIcon={<FcHome />} mr="4">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button bgColor={buttonBgColor} _hover={{bgColor:'teal.300'}} leftIcon={<FcAbout /> }>About</Button>
          </Link>

          <Tooltip hasArrow label="Dark Mode">
            <Box>
              <ColorModeSwitcher />
            </Box>
          </Tooltip>
        </HStack>
      </Flex>
      <Divider />
    </>
  );
};

export default Header;
