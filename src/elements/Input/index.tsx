import React, { forwardRef, RefObject, useMemo } from 'react';

import {
  Input as ChakraInput,
  FormControl,
  FormControlProps,
  InputGroup,
  InputLeftElement,
  Text,
  InputProps as ChakraInputProps,
  useTheme,
  InputRightElement,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

import { FormInputProps } from '@/elements/FormInput';
import { FormLabel } from '@/elements/FormLabel';

type InputProps = ChakraInputProps &
  FormInputProps & {
    clearFieldHandler?: () => void;
    error?: string | undefined;
    showClear?: boolean;
    containerProps?: FormControlProps;
    isSuccess?: boolean;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      clearFieldHandler,
      error,
      label,
      showClear,
      variant = 'outline',
      containerProps,
      id,
      hasLeftElement,
      leftElement,
      hintText,
      isInvalid,
      isSuccess,
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

        <InputGroup mb='0'>
          {hasLeftElement && leftElement && (
            <InputLeftElement fontSize='1.2em' pointerEvents='none'>
              {leftElement}
            </InputLeftElement>
          )}
          <ChakraInput
            id={inputId}
            ref={ref as RefObject<HTMLInputElement>}
            variant={variant}
            {...rest}
          />

          {showClear && (
            <InputRightElement>
              {showClear && (
                <MdCancel
                  color={theme.colors.betaBlack}
                  cursor='pointer'
                  onClick={clearFieldHandler}
                />
              )}
            </InputRightElement>
          )}
        </InputGroup>

        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  },
);

Input.displayName = 'Input';

export default Input;
