// chakra imports
import React from 'react';

import { Box, Flex, Stack } from '@chakra-ui/react';

import Brand from '@/components/Layout/Sidebar/Brand';
import Links from '@/components/Layout/Sidebar/Links';

function SidebarContent() {
  return (
    <Flex
      borderRadius='30px'
      direction='column'
      height='100%'
      pt='25px'
      px='16px'
    >
      <Brand />
      <Stack direction='column' mb='auto' mt='8px'>
        <Box pe={{ md: '16px', '2xl': '1px' }} ps='20px'>
          <Links />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
