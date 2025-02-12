import React, { useCallback } from 'react';

import { FormControlProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import Input from '@/elements/Input';

export type FormInputProps = Omit<
  FormControlProps,
  'label' | 'onChange' | 'defaultValue'
> & {
  label?: string | React.ReactNode;
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  variant?: string;
  hasLeftElement?: boolean;
  leftElement?: string | React.ReactNode;
  hintText?: string;
};

const FormInput: React.FC<FormInputProps> = ({ name, variant, ...rest }) => {
  const {
    formState: { errors },
    getValues,
    setValue,
    register,
  } = useFormContext();

  const clearFieldHandler = useCallback(() => {
    setValue(name, '', { shouldValidate: true });
  }, [name, setValue]);

  const showClear = getValues(name) && variant !== 'readonly';
  const error = errors[name]?.message as string;
  const isSuccess = !errors[name]?.message && getValues(name);

  return (
    <Input
      clearFieldHandler={clearFieldHandler}
      containerProps={{ mb: 'md' }}
      error={error}
      isInvalid={Boolean(errors[name]?.message)}
      isSuccess={isSuccess}
      showClear={showClear}
      variant={variant}
      {...register(name)}
      {...rest}
    />
  );
};

export default FormInput;
