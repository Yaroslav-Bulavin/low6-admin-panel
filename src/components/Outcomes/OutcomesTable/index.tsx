import React from 'react';

import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { OutcomeType } from '@/types';

const TABLE_HEADERS: { title: string; align: 'left' | 'center' | 'right' }[] = [
  { title: 'Title', align: 'left' },
  { title: 'End date', align: 'left' },
  { title: 'Is scored', align: 'center' },
  { title: 'Description', align: 'center' },
  { title: 'Odds', align: 'center' },
  { title: 'bets amount', align: 'center' },
];
interface OutcomesTableProps {
  data: OutcomeType[];
}
export const OutcomesTable: React.FC<OutcomesTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            {TABLE_HEADERS.map((item, idx) => (
              <Th key={idx} textAlign={item.align}>
                {item.title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.title}</Td>
              <Td>{item.end_date}</Td>
              <Td textAlign='center'>{item.is_scored}</Td>
              <Td textAlign='center'>{item.description}</Td>
              <Td textAlign='center'>{item.odds}</Td>
              <Td textAlign='center'>{item.bets_count}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
