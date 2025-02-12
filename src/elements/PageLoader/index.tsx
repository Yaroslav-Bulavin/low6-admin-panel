import React from 'react';

import { Box, Spinner } from '@chakra-ui/react';

export const PageLoader: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        h: '100vh',
        w: '100%',
        background: 'black',
        opacity: '0.7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1999,
      }}
    >
      <Spinner color='app.white' size='xl' speed='0.65s' thickness='4px' />
    </Box>
  );
};
