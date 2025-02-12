import React, { FC } from 'react';

import { Box, FormLabel as ChakraFormLabel, Tooltip } from '@chakra-ui/react';
import { AiFillQuestionCircle } from 'react-icons/ai';

export type FormLabelProps = {
  label: string | React.ReactNode;
  id: string;
};

export const FormLabel: FC<FormLabelProps> = ({ label, id }) => {
  return (
    <ChakraFormLabel fontSize='14px' htmlFor={id}>
      {label}
    </ChakraFormLabel>
  );
};
