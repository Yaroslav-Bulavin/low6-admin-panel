import React from 'react';

import { Flex, FlexProps } from '@chakra-ui/react';

const HSeparator = (props: FlexProps) => {
  const { children, ...rest } = props;
  return <Flex bg='rgba(135, 140, 189, 0.3)' h='1px' w='100%' {...rest}></Flex>;
};

const VSeparator = (props: FlexProps) => {
  const { children, ...rest } = props;
  return <Flex bg='rgba(135, 140, 189, 0.3)' w='1px' {...rest}></Flex>;
};

export { HSeparator, VSeparator };
