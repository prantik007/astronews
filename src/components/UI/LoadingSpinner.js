import { Spinner, Flex, Center } from '@chakra-ui/react';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <Flex justify='center' alignItems='center' minH='500px'>
    <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      
    </Flex>
  );
};

export default LoadingSpinner;
