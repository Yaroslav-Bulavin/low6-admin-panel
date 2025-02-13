import React from 'react';

import { Card, Text } from '@chakra-ui/react';

import { OutcomesTable } from '@/components/Outcomes/OutcomesTable';

import { useGetOutcomesQuery } from '@/services/api.service';

const OutcomesPage: React.FC = () => {
  const { data, isLoading } = useGetOutcomesQuery();
  return (
    <Card
      flexDirection='column'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
      px='0px'
      w='100%'
    >
      <Text
        color={'secondaryGray.900'}
        fontSize='22px'
        fontWeight='700'
        lineHeight='100%'
        pb='24px'
        pl='24px'
      >
        Outcomes Table
      </Text>

      <OutcomesTable data={data?.outcomes || []} />
    </Card>
  );
};

export default OutcomesPage;
