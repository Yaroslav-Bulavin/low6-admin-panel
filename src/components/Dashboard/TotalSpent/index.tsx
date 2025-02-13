// Chakra imports
import React from 'react';

import { Box, Button, Card, Flex, Icon, Text } from '@chakra-ui/react';
import ReactApexChart from 'react-apexcharts';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md';
// Assets
import { RiArrowUpSFill } from 'react-icons/ri';

import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from '@/utils/charts';

interface TotalSpentProps {}
export const TotalSpent: React.FC<TotalSpentProps> = () => {
  return (
    <Card
      align='center'
      direction='column'
      justifyContent='center'
      mb='0px'
      w='100%'
    >
      <Flex justify='space-between' pt='5px' w='100%'>
        <Flex align='center' w='100%'>
          <Button
            bg={'secondaryGray.300'}
            borderRadius='7px'
            color={'secondaryGray.600'}
            fontSize='sm'
            fontWeight='500'
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={'secondaryGray.600'}
              me='4px'
            />
            This month
          </Button>
          <Button
            _active={{ bg: 'secondaryGray.300' }}
            _focus={{ bg: 'secondaryGray.300' }}
            _hover={{ bg: 'secondaryGray.400' }}
            bg={'secondaryGray.300'}
            borderRadius='10px'
            h='37px'
            justifyContent='center'
            lineHeight='100%'
            ms='auto'
            w='37px'
          >
            <Icon as={MdBarChart} color={'brand.500'} h='24px' w='24px' />
          </Button>
        </Flex>
      </Flex>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} w='100%'>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text
            color={'secondaryGray.900'}
            fontSize='34px'
            fontWeight='700'
            lineHeight='100%'
            textAlign='start'
          >
            $37.5K
          </Text>
          <Flex align='center' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'
              me='12px'
              mt='4px'
            >
              Total Spent
            </Text>
            <Flex align='center'>
              <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />
              <Text color='green.500' fontSize='sm' fontWeight='700'>
                +2.45%
              </Text>
            </Flex>
          </Flex>

          <Flex align='center'>
            <Icon as={IoCheckmarkCircle} color='green.500' me='4px' />
            <Text color='green.500' fontSize='md' fontWeight='700'>
              On track
            </Text>
          </Flex>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          <ReactApexChart
            height='100%'
            options={lineChartOptionsTotalSpent as any}
            series={lineChartDataTotalSpent}
            type='line'
            width='100%'
          />
        </Box>
      </Flex>
    </Card>
  );
};
