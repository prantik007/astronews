import React from "react";
import { Box } from '@chakra-ui/react';

const Details = (props) => {
  return <Box maxW="800" minw='600'>
      {props.children}
  </Box>;
};

export default React.memo(Details);
