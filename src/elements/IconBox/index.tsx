import React from 'react';

import { Flex, FlexProps } from '@chakra-ui/react';

interface IconBoxProps extends FlexProps {
  icon: React.ReactNode;
}
export const IconBox: React.FC<IconBoxProps> = ({ icon, ...rest }) => {
  return (
    <Flex
      alignItems={'center'}
      borderRadius={'50%'}
      justifyContent={'center'}
      {...rest}
    >
      {icon}
    </Flex>
  );
};
