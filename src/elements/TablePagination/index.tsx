import React from 'react';

import { Box, Flex, IconButton, Select } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TablePaginationProps {
  rowsPerPage: number;
  offset: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}
export const TablePagination: React.FC<TablePaginationProps> = ({
  rowsPerPage,
  setRowsPerPage,
  offset,
  setOffset,
}) => {
  const handleClickPrev = () => {
    if (offset < rowsPerPage) return;
    setOffset(offset - rowsPerPage);
  };
  const handleClickNext = () => {
    setOffset(offset + rowsPerPage);
  };

  return (
    <Flex alignItems='center' gap='16px' justifyContent='flex-end'>
      <Flex alignItems='center' gap='8px'>
        <Box>Rows per page</Box>
        <Select
          maxW='75px'
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          placeholder='Select option'
          size='sm'
          value={rowsPerPage}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Select>
      </Flex>
      <Flex alignItems='center' gap='8px'>
        <Box>
          {0}–{rowsPerPage} of 25
        </Box>
        <Flex alignItems='center' gap='4px'>
          <IconButton
            aria-label='previous'
            icon={<FaChevronLeft />}
            onClick={handleClickPrev}
          />
          <IconButton
            aria-label='next'
            icon={<FaChevronRight />}
            onClick={handleClickNext}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
