import React from 'react';

// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from '@/components/Icons';

import { HSeparator } from '@/elements/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  const logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex align='center' direction='column'>
      <HorizonLogo color={logoColor} h='26px' my='32px' w='175px' />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
