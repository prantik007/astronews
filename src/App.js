import React from 'react';
import { ChakraProvider, Container, Flex, theme } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import bgImage from './assets/images/bgImage.jpg'

function App() {
  return (
    
    <Router>
      <ChakraProvider theme={theme}>
        <Flex direction="column" m='0' p='0' h='full'>
          <Header />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Flex>
      </ChakraProvider>
    </Router>
    
  );
}

export default App;
