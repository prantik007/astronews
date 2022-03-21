import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex m="4" direction="column">
        <Header />
        <Body />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
