import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  useColorModeValue,
  Flex,
  calc,
  Center,
  Spacer,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  const headingColor = useColorModeValue('blue.900', 'white');
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const handleOnClickGithub = () => {
    window.open('https://github.com/prantik007/astronews', '_blank');
  };
  return (
    <Center>
      {' '}
      <VStack
        spacing="50"
        m={['auto', 'auto', '10', '10']}
        mt="10"
        w={['400px', '400px', '1000px', '1300px']}
        h={['650px', '650px', '500px', '500px']}
        bgColor={bgColor}
      >
        <Heading size="3xl" mt="4" color={headingColor}>
          Astro News
        </Heading>

        <Text as="p" w="70%">
          One of the most popular websites at NASA is the Astronomy Picture of
          the Day. In fact, this website is one of the most popular websites
          across all federal agencies. It has the popular appeal of a Justin
          Bieber video. It fetches the pictures of the day directly from NASA
          using NASA'S APOD API and displays it here. Updates daily
          automatically.
        </Text>
        <Text fontSize={['2xl', '2xl', '3xl', '4xl']}>
          Made by Prantik Chakraborty 🚀
        </Text>
        <Text fontSize={['lg']}>React JS, react-router-dom, Chakra-UI</Text>
        <HStack>
          <Button onClick={handleOnClickGithub} leftIcon={<FaGithub />}>
            GitHub
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};

export default About;
