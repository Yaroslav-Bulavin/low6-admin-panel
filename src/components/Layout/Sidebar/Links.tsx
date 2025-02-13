import React from 'react';

import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

import { useAppNav } from '@/hooks/useAppNav.hook';
// chakra imports

export function SidebarLinks() {
  const location = useLocation();

  const { navLinks } = useAppNav();

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  return (
    <>
      {navLinks.map((route, index) => (
        <NavLink key={index} to={route.path}>
          {route.icon ? (
            <Box>
              <HStack
                ps='10px'
                py='5px'
                spacing={
                  activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                }
              >
                <Flex alignItems='center' justifyContent='center' w='100%'>
                  <Box
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? 'brand.500'
                        : 'secondaryGray.500'
                    }
                    me='18px'
                  >
                    {route.icon}
                  </Box>
                  <Text
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? 'gray.700'
                        : 'secondaryGray.500'
                    }
                    fontWeight={
                      activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'
                    }
                    me='auto'
                  >
                    {route.name}
                  </Text>
                </Flex>
                <Box
                  bg={
                    activeRoute(route.path.toLowerCase())
                      ? 'brand.500'
                      : 'transparent'
                  }
                  borderRadius='5px'
                  h='36px'
                  w='4px'
                />
              </HStack>
            </Box>
          ) : (
            <Box>
              <HStack
                ps='10px'
                py='5px'
                spacing={
                  activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                }
              >
                <Text
                  color={
                    activeRoute(route.path.toLowerCase())
                      ? 'gray.700'
                      : 'secondaryGray.600'
                  }
                  fontWeight={
                    activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'
                  }
                  me='auto'
                >
                  {route.name}
                </Text>
                <Box bg='brand.400' borderRadius='5px' h='36px' w='4px' />
              </HStack>
            </Box>
          )}
        </NavLink>
      ))}
    </>
  );
}

export default SidebarLinks;
