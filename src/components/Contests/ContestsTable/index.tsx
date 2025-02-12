import React from 'react';

import {
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { ContestType } from '@/types';

import { ContestsTableActionsMenu } from '@/components/Contests/ContestsTableActionsMenu';

interface ContestsTableProps {
  data: ContestType[];
}
export const ContestsTable: React.FC<ContestsTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th textAlign='center'>Jackpot</Th>
            <Th textAlign='center'>Entry fee</Th>
            <Th textAlign='center'>Scored</Th>
            <Th textAlign='right'>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((contest) => (
            <Tr key={contest.id}>
              <Td>{contest?.end_date}</Td>
              <Td textAlign='center'>{contest?.jackpot}</Td>
              <Td textAlign='center'>{contest?.entry_fee}</Td>
              <Td textAlign='center'>{JSON.stringify(contest?.is_scored)}</Td>
              <Td textAlign='center'>
                <ContestsTableActionsMenu contest={contest} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
