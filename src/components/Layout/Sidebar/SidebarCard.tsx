import React from 'react';

import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import logoWhite from '@/assets/img/layout/logoWhite.png';

export default function SidebarDocs() {
  const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)';
  const borderColor = useColorModeValue('white', 'navy.800');

  return (
    <Flex
      align='center'
      bg={bgColor}
      borderRadius='30px'
      direction='column'
      justify='center'
      position='relative'
    >
      <Flex
        align='center'
        bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
        border='5px solid'
        borderColor={borderColor}
        borderRadius='50%'
        h='94px'
        justify='center'
        left='50%'
        mx='auto'
        position='absolute'
        top='-47px'
        transform='translate(-50%, 0%)'
        w='94px'
      >
        <Image h='40px' src={logoWhite} w='40px' />
      </Flex>
      <Flex
        align='center'
        direction='column'
        justify='center'
        mb='12px'
        pt='55px'
        px='15px'
      >
        <Text
          color='white'
          fontSize={{ base: 'lg', xl: '18px' }}
          fontWeight='bold'
          lineHeight='150%'
          mb='6px'
          mt='10px'
          px='10px'
          textAlign='center'
        >
          Upgrade to PRO
        </Text>
        <Text
          color={'white'}
          fontSize='14px'
          fontWeight='500'
          mb='6px'
          px='10px'
          textAlign='center'
        >
          Improve your development process and start doing more with Horizon UI
          PRO!
        </Text>
      </Flex>
      <Link href='https://horizon-ui.com/pro?ref=horizon-chakra-free'>
        <Button
          _active={{ bg: 'whiteAlpha.100' }}
          _hover={{ bg: 'whiteAlpha.200' }}
          bg='whiteAlpha.300'
          color={'white'}
          fontSize='sm'
          fontWeight='regular'
          mb={{ sm: '16px', xl: '24px' }}
          minW='185px'
          mx='auto'
        >
          Upgrade to PRO
        </Button>
      </Link>
    </Flex>
  );
}
