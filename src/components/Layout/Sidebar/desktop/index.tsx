import React from 'react';

import { Box } from '@chakra-ui/react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Content from '@/components/Layout/Sidebar/Content';

import { renderThumb, renderTrack, renderView } from '@/elements/Scrollbar';

export function SidebarDesktop() {
  return (
    <Box minH='100%' position='fixed' w='100%'>
      <Box
        bg={'white'}
        boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
        h='100vh'
        m={'0px'}
        minH='100%'
        overflowX='hidden'
        transition={'0.2s linear'}
        w='300px'
      >
        <Scrollbars
          autoHide
          renderThumbVertical={renderThumb}
          renderTrackVertical={renderTrack}
          renderView={renderView}
        >
          <Content />
        </Scrollbars>
      </Box>
    </Box>
  );
}
