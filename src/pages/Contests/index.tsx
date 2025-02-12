import React, { useState } from 'react';

import { Button, Flex, Heading } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { ContestsTable } from '@/components/Contests/ContestsTable';

import { TablePagination } from '@/elements/TablePagination';

import { RoutesEnum } from '@/enums/routes.enum';

import { createPath } from '@/routes/util';

import { useGetContestsQuery } from '@/services/api.service';

const ContestsPage: React.FC = () => {
  const navigate = useNavigate();
  const [limit, setLimit] = useState<number>(25);
  const [offset, setOffset] = useState<number>(0);

  const { data, isLoading } = useGetContestsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  return (
    <div>
      <Flex alignItems='center' justifyContent='space-between' mb='36px'>
        <Heading as='h4' fontSize='24px' fontWeight='700'>
          Contests
        </Heading>
        <Button
          colorScheme='blue'
          leftIcon={<FaPlus fill='white' />}
          onClick={() =>
            navigate(
              createPath({ path: RoutesEnum.contest, params: { id: 'new' } }),
            )
          }
        >
          New Contest
        </Button>
      </Flex>

      <TablePagination
        offset={offset}
        rowsPerPage={limit}
        setOffset={setOffset}
        setRowsPerPage={setLimit}
      />
      <ContestsTable data={data?.contests || []} />
    </div>
  );
};

export default ContestsPage;
