import React from 'react';

import { Box } from '@chakra-ui/react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Content from '@/components/Layout/Sidebar/Content';

import { renderThumb, renderTrack, renderView } from '@/elements/Scrollbar';

interface SidebarDesktopProps {
  routes: any[];
}
export function SidebarDesktop(props: SidebarDesktopProps) {
  const { routes } = props;

  const variantChange = '0.2s linear';

  const sidebarMargins = '0px';

  // SIDEBAR
  return (
    <Box
      display={{ sm: 'none', xl: 'block' }}
      minH='100%'
      position='fixed'
      w='100%'
    >
      <Box
        bg={'white'}
        boxShadow={'14px 17px 40px 4px rgba(112, 144, 176, 0.08)'}
        h='100vh'
        m={sidebarMargins}
        minH='100%'
        overflowX='hidden'
        transition={variantChange}
        w='300px'
      >
        <Scrollbars
          autoHide
          renderThumbVertical={renderThumb}
          renderTrackVertical={renderTrack}
          renderView={renderView}
        >
          <Content routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  );
}
