import React, { FC, useCallback } from 'react';

import { FormControlProps } from '@chakra-ui/react';
import { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import { useController, useFormContext } from 'react-hook-form';

import DatePicker from '@/elements/DatePicker';

export type FormDatePickerProps = Omit<FormControlProps, 'label'> &
  Omit<ReactDatePickerProps, 'onChange'> & {
    name: string;
    label: string | React.ReactNode;
    value?: string;
    tooltipText?: string | React.ReactNode;
    hasTooltip?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
  };

const FormDatePicker: FC<FormDatePickerProps> = ({ name, ...rest }) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    control,
    name,
  });

  const render = useCallback(
    () => (
      <DatePicker
        containerProps={{ mb: 'md' }}
        error={fieldState.error?.message}
        isInvalid={Boolean(fieldState.error)}
        selected={field.value}
        {...rest}
        {...field}
      />
    ),
    [field, fieldState.error, rest],
  );

  return render();
};

export default FormDatePicker;
