import React, { useCallback } from 'react';

import {
  NumberInputProps as ChakraNumberInputProps,
  FormControlProps,
} from '@chakra-ui/react';
import { useController, useFormContext } from 'react-hook-form';

import NumberInput from '@/elements/NumberInput';

export type FormNumberInputProps = Omit<
  FormControlProps,
  'label' | 'onChange' | 'defaultValue' | 'onInvalid'
> & {
  label?: string;
  name: string;
  variant?: string;
  isStepperNeeded?: boolean;
};

const FormNumberInput: React.FC<FormNumberInputProps> = ({
  name,
  variant,
  isStepperNeeded = true,
  ...rest
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    control,
    name,
  });

  const render = useCallback(
    () => (
      <NumberInput
        error={fieldState.error?.message}
        isInvalid={Boolean(fieldState.error)}
        isStepperNeeded={isStepperNeeded}
        variant={variant}
        {...rest}
        {...field}
      />
    ),
    [field, fieldState.error, rest],
  );

  return render();
};

export default FormNumberInput;
