import * as React from 'react';
import { forwardRef, RefObject, useCallback, useMemo } from 'react';

import {
  FormControl,
  FormControlProps,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { format, getMonth, getYear, setMonth } from 'date-fns';
import { range } from 'lodash';
import { default as ReactDatePicker } from 'react-datepicker';
import { AiTwotoneCalendar } from 'react-icons/ai';

import { FormDatePickerProps } from '@/elements/FormDatePicker';
import { FormLabel } from '@/elements/FormLabel';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = Omit<ChakraInputProps, 'label'> &
  FormDatePickerProps & {
    error?: string | undefined;
    containerProps?: FormControlProps;
    selected?: Date | null;
    setSelected?: Function;
  };

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      selected,
      setSelected,
      label,
      dateFormat = 'dd/MM/yyyy',
      id,
      containerProps,
      error,
      variant = 'outline',
      ...rest
    },
    ref,
  ) => {
    const inputId = useMemo(() => id || `${Date.now()}-${Math.random()}`, [id]);

    const handleOnChange = useCallback(
      (date: React.ChangeEvent<HTMLInputElement>) => {
        if (setSelected) {
          setSelected(date);
        }
      },
      [setSelected],
    );

    return (
      <FormControl id={inputId} isInvalid={Boolean(error)} {...containerProps}>
        {label && <FormLabel id={inputId} label={label} />}
        <InputGroup maxW='fit-content' mb='16px' minW='auto'>
          <ChakraInput
            as={ReactDatePicker}
            autoComplete='off'
            dateFormat={dateFormat}
            id={inputId}
            onChange={handleOnChange}
            ref={ref as RefObject<HTMLInputElement>}
            selected={selected}
            variant={variant}
            {...rest}
          />
          <InputRightElement h='100%'>
            <AiTwotoneCalendar size='1rem' />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    );
  },
);

DatePicker.displayName = 'DatePicker';

export default DatePicker;
