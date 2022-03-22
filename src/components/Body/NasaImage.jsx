import React from "react";
import { VStack } from '@chakra-ui/react';

const NasaImage = (props) => {
  return <VStack mr={[null,null,'10','10']} m='0' mb='8'>
      {props.children}
  </VStack>;
};

export default React.memo(NasaImage);
