import React from 'react';

import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from 'react-icons/md';

import Usa from '@/assets/img/dashboards/usa.png';

import { TotalSpent } from '@/components/Dashboard/TotalSpent';
import { MiniStatistics } from '@/components/MiniStatistics';

import { IconBox } from '@/elements/IconBox';

const DashboardPage: React.FC = () => {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
        gap='20px'
        mb='20px'
      >
        <MiniStatistics
          name='Earnings'
          startContent={
            <IconBox
              bg={'secondaryGray.300'}
              h='56px'
              icon={
                <Icon as={MdBarChart} color={'brand.500'} h='32px' w='32px' />
              }
              w='56px'
            />
          }
          value='$350.4'
        />
        <MiniStatistics
          name='Spend this month'
          startContent={
            <IconBox
              bg={'secondaryGray.300'}
              h='56px'
              icon={
                <Icon
                  as={MdAttachMoney}
                  color={'brand.500'}
                  h='32px'
                  w='32px'
                />
              }
              w='56px'
            />
          }
          value='$642.39'
        />
        <MiniStatistics growth='+23%' name='Sales' value='$574.34' />
        <MiniStatistics
          endContent={
            <Flex me='-16px' mt='10px'>
              <FormLabel htmlFor='balance'>
                <Avatar src={Usa} />
              </FormLabel>
              <Select
                defaultValue='usd'
                id='balance'
                me='0px'
                mt='5px'
                variant='mini'
              >
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gba'>GBA</option>
              </Select>
            </Flex>
          }
          name='Your balance'
          value='$1,000'
        />
        <MiniStatistics
          name='New Tasks'
          startContent={
            <IconBox
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              h='56px'
              icon={<Icon as={MdAddTask} color='white' h='28px' w='28px' />}
              w='56px'
            />
          }
          value='154'
        />
        <MiniStatistics
          name='Total Projects'
          startContent={
            <IconBox
              bg={'secondaryGray.300'}
              h='56px'
              icon={
                <Icon as={MdFileCopy} color={'brand.500'} h='32px' w='32px' />
              }
              w='56px'
            />
          }
          value='2935'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <div></div>
        {/*<WeeklyRevenue />*/}
      </SimpleGrid>
    </Box>
  );
};

export default DashboardPage;
