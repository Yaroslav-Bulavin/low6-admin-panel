import React, { FC, useCallback } from 'react';

import {
  InputProps as ChakraInputProps,
  FormControlProps,
} from '@chakra-ui/react';
import { useController, useFormContext } from 'react-hook-form';

import PasswordInput from '@/elements/PasswordInput';

export type FormPasswordInputProps = Omit<
  FormControlProps,
  'label' | 'onChange' | 'defaultValue'
> &
  Omit<ChakraInputProps, 'label'> & {
    containerProps?: FormControlProps;
    label?: string | React.ReactNode;
    name: string;
  };
const FormPasswordInput: FC<FormPasswordInputProps> = ({ name, ...rest }) => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
  });

  const isSuccess = !errors[name]?.message && getValues(name);

  const render = useCallback(
    () => (
      <PasswordInput
        containerProps={{ mb: 'md' }}
        error={fieldState.error?.message}
        isInvalid={Boolean(fieldState.error)}
        isSuccess={isSuccess}
        password={field.value || ''}
        {...rest}
        {...field}
      />
    ),
    [field, fieldState.error, isSuccess, rest],
  );

  return render();
};

export default FormPasswordInput;
