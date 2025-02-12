import React from 'react';

import { SelectProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import Select from '@/elements/Select';

interface SelectOptionType {
  value: string;
  label: string;
}
export interface FormSelectProps extends SelectProps {
  options: SelectOptionType[];
  name: string;
  label: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({ name, ...props }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = errors[name]?.message as string;

  return (
    <Select
      error={error}
      isInvalid={Boolean(errors[name]?.message)}
      {...register(name)}
      {...props}
    />
  );
};
