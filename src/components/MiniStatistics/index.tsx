import React from 'react';

import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Card,
} from '@chakra-ui/react';

interface MiniStatisticsProps {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  name?: string;
  growth?: string;
  value?: string;
}
export const MiniStatistics: React.FC<MiniStatisticsProps> = ({
  startContent,
  endContent,
  name,
  growth,
  value,
}) => {
  return (
    <Card py='15px'>
      <Flex
        align={{ base: 'center', xl: 'start' }}
        h='100%'
        justify={{ base: 'center', xl: 'center' }}
        my='auto'
      >
        {startContent}

        <Stat ms={startContent ? '18px' : '0px'} my='auto'>
          <StatLabel
            color={'secondaryGray.600'}
            fontSize={{
              base: 'sm',
            }}
            lineHeight='100%'
          >
            {name}
          </StatLabel>
          <StatNumber
            color={'secondaryGray.900'}
            fontSize={{
              base: '2xl',
            }}
          >
            {value}
          </StatNumber>
          {growth ? (
            <Flex align='center'>
              <Text color='green.500' fontSize='xs' fontWeight='700' me='5px'>
                {growth}
              </Text>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms='auto' w='max-content'>
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
};
