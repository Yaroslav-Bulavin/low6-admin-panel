import React from 'react';

import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
// chakra imports

export function SidebarLinks(props: { routes: any[] }) {
  //   Chakra color mode
  const location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks: any = (routes: any[]) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <>
            <Text
              color={'gray.700'}
              fontSize={'md'}
              fontWeight='bold'
              key={index}
              mx='auto'
              pb='12px'
              ps={{
                sm: '10px',
                xl: '16px',
              }}
              pt='18px'
            >
              {route.name}
            </Text>
            {createLinks(route.items)}
          </>
        );
      } else if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {
        return (
          <NavLink key={index} to={route.layout + route.path}>
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
                        activeRoute(route.path.toLowerCase())
                          ? 'bold'
                          : 'normal'
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
        );
      }
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;
