import React, { forwardRef, RefObject, useMemo } from 'react';

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Select as ChakraSelect,
} from '@chakra-ui/react';

import { FormLabel } from '@/elements/FormLabel';
import { FormSelectProps } from '@/elements/FormSelect';

interface SelectProps extends FormSelectProps {
  error?: string;
  containerProps?: FormControlProps;
}
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { id, label, isInvalid, variant, options, containerProps, error, ...rest },
    ref,
  ) => {
    const inputId = useMemo(() => id || `${Date.now()}-${Math.random()}`, [id]);
    return (
      <FormControl
        id={inputId}
        isInvalid={isInvalid}
        isReadOnly={variant === 'readonly'}
        paddingBottom='16px'
        {...containerProps}
      >
        {label && <FormLabel id={inputId} label={label} />}
        <ChakraSelect
          id={inputId}
          ref={ref as RefObject<HTMLSelectElement>}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </ChakraSelect>

        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  },
);

Select.displayName = 'Select';

export default Select;
