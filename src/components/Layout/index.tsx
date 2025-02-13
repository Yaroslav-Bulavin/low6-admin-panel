import React, { useMemo } from 'react';

import {
  Avatar,
  Box,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';

import { SidebarDesktop } from '@/components/Layout/Sidebar/desktop';

import { useAppNav } from '@/hooks/useAppNav.hook';

const Layout: React.FC = () => {
  return (
    <Flex h='100%' w='100%'>
      <SidebarDesktop />

      <Flex
        flexDirection='column'
        h='100%'
        maxW='calc(100% - 300px)'
        ml='auto'
        w='calc(100% - 300px)'
      >
        <Flex justifyContent='flex-end' px='40px' py='16px' w='100%'>
          <Menu>
            <MenuButton
              as={Avatar}
              cursor='pointer'
              src='https://bit.ly/sage-adebayo'
            />
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Box px='16px' w='100%'>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
