import React from 'react';

import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

interface FormCheckboxProps extends CheckboxProps {
  name: string;
}
export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  children,
  ...props
}) => {
  const {
    formState: { errors },
    getValues,
    setValue,
    register,
  } = useFormContext();

  const error = errors[name]?.message as string;

  return (
    <Checkbox
      error={error}
      isInvalid={Boolean(errors[name]?.message)}
      {...register(name)}
      {...props}
    >
      {children}
    </Checkbox>
  );
};
