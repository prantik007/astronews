/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';

import axios from 'axios';
import { HStack } from '@chakra-ui/react';
import NasaImage from './NasaImage';
import Details from './Details';
import LoadingSpinner from './../UI/LoadingSpinner';
import { useColorModeValue } from '@chakra-ui/react';




const Body = () => {
  const API = process.env.REACT_APP_API_KEY  
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API}`;


  const [data, setData] = useState({});
  const [isHD, setIsHD] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const headingcolor=useColorModeValue('teal.500','teal.200')

  const handleImageQuality = () => {
    setIsHD(prevState => {
      console.log(
        '🚀 ~ file: Body.jsx ~ line 25 ~ setIsHD ~ prevState',
        prevState
      );

      return !prevState;
    });
  };

  useEffect(async () => {
    setIsLoading(true);
    const response = await axios.get(API_URL);
    setData(response.data);

    console.log(
      '🚀 ~ file: Body.jsx ~ line 17 ~ useEffect ~ response.data',
      response.data
    );
    setIsLoading(false);
  }, []);

  return (
    <div style={{height:'100%'}}>
      {' '}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Flex
          justify="center"
          mt="10"
          direction={['column', 'column', 'row', 'row']}
          m={['5','5','10','10']}
          h='full'
        >
          <NasaImage>
            <Image src={isHD ? data.hdurl : data.url} maxH="600" maxW="100%" />
            <Spacer />
            <HStack>
              <Text>SD</Text>
              <Switch id="imageQuality" onChange={handleImageQuality} />
              <Text>HD</Text>
            </HStack>
          </NasaImage>

          <Details>
            <HStack mb="4">
              <Text mr="4">{data.date}</Text>
              <Badge colorScheme="green">Updated Daily</Badge>
            </HStack>

            <Spacer />
            <Heading mb="4" color={headingcolor}>{data.title}</Heading>
            <Text color="gray">By - {data.copyright?data.copyright:'NASA'}</Text>
            <Spacer />
            <Text as="p" mt="50" lineHeight="2">
              {data.explanation}
            </Text>
          </Details>
        </Flex>
      )}
    </div>
  );
};

export default Body;
