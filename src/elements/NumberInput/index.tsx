import React, { forwardRef, RefObject, useMemo } from 'react';

import {
  FormControl,
  FormControlProps,
  NumberInput as ChakraNumberInput,
  NumberInputProps as ChakraNumberInputProps,
  useTheme,
  FormErrorMessage,
  NumberInputField as ChakraNumberInputField,
  NumberInputStepper as ChakraNumberInputStepper,
  NumberIncrementStepper as ChakraNumberIncrementStepper,
  NumberDecrementStepper as ChakraNumberDecrementStepper,
} from '@chakra-ui/react';

import { FormLabel } from '@/elements/FormLabel';
import { FormNumberInputProps } from '@/elements/FormNumberInput';

type NumberInputProps = Omit<ChakraNumberInputProps, 'onChange'> &
  FormNumberInputProps & {
    error?: string | undefined;
    containerProps?: FormControlProps;
    isSuccess?: boolean;
    onChange?: (val: string) => void;
  };

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      error,
      label,
      variant = 'outline',
      containerProps,
      id,
      isInvalid,
      max = 49,
      min = 1,
      onChange,
      isStepperNeeded,
      ...rest
    },
    ref,
  ) => {
    const inputId = useMemo(() => id || `${Date.now()}-${Math.random()}`, [id]);
    const theme = useTheme();

    return (
      <FormControl
        id={inputId}
        isInvalid={isInvalid}
        isReadOnly={variant === 'readonly'}
        paddingBottom='16px'
        {...containerProps}
      >
        {label && <FormLabel id={inputId} label={label} />}

        <ChakraNumberInput
          max={Number(max)}
          min={Number(min)}
          onChange={(valueString) => onChange?.(valueString)}
          {...rest}
        >
          <ChakraNumberInputField ref={ref as RefObject<HTMLInputElement>} />

          {isStepperNeeded && (
            <ChakraNumberInputStepper>
              <ChakraNumberIncrementStepper />
              <ChakraNumberDecrementStepper />
            </ChakraNumberInputStepper>
          )}
        </ChakraNumberInput>

        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  },
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;
