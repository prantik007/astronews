import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Flex m="4" direction="column">
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
