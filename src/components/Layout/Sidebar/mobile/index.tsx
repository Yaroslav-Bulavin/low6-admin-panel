import React from 'react';

import { useDisclosure } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { IoMenuOutline } from 'react-icons/io5';

import Content from '@/components/Layout/Sidebar/Content';

import { renderThumb, renderTrack, renderView } from '@/elements/Scrollbar';

interface SidebarMobileProps {
  routes: any[];
}

export function SidebarMobile(props: SidebarMobileProps) {
  // // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLDivElement | null>(null);

  const { routes } = props;
  // let isWindows = navigator.platform.startsWith("Win");
  //  BRAND

  return (
    <Flex alignItems='center' display={{ sm: 'flex', xl: 'none' }}>
      <Flex h='max-content' onClick={onOpen} ref={btnRef} w='max-content'>
        <Icon
          _hover={{ cursor: 'pointer' }}
          as={IoMenuOutline}
          color={'gray.400'}
          h='20px'
          me='10px'
          my='auto'
          w='20px'
        />
      </Flex>
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === 'rtl' ? 'right' : 'left'}
      >
        <DrawerOverlay />
        <DrawerContent bg={'white'} maxW='285px' w='285px'>
          <DrawerCloseButton
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
            zIndex='3'
          />
          <DrawerBody maxW='285px' pb='0' px='0rem'>
            <Scrollbars
              autoHide
              renderThumbVertical={renderThumb}
              renderTrackVertical={renderTrack}
              renderView={renderView}
            >
              <Content routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
