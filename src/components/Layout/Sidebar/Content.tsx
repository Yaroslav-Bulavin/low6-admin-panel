// chakra imports
import React from 'react';

import { Box, Flex, Stack } from '@chakra-ui/react';

//   Custom components
import Brand from '@/components/Layout/Sidebar/Brand';
import Links from '@/components/Layout/Sidebar/Links';
import SidebarCard from '@/components/Layout/Sidebar/SidebarCard';

// FUNCTIONS

// TODO: remove
function SidebarContent(props: any) {
  const { routes } = props;
  // SIDEBAR
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
          <Links routes={routes} />
        </Box>
      </Stack>

      <Box borderRadius='30px' mb='40px' mt='60px'>
        <SidebarCard />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
