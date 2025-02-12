import { forwardRef, useCallback, useMemo, useState } from 'react';

import {
  Input as ChakraInput,
  Button,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  useTheme,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { FormLabel } from '@/elements/FormLabel';
import { FormPasswordInputProps } from '@/elements/FormPasswordInput';

export type PasswordInputProps = FormPasswordInputProps & {
  error?: string;
  password: string;
  isSuccess?: boolean;
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      isDisabled,
      label,
      containerProps,
      id,
      variant = 'outline',
      password,
      isInvalid,
      error,
      isSuccess,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const inputId = useMemo(() => id || `${Date.now()}-${Math.random()}`, [id]);

    const handleClick = useCallback(() => setShow(!show), [show]);

    return (
      <FormControl
        id={inputId}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        paddingBottom='16px'
        {...containerProps}
      >
        {label && <FormLabel id={inputId} label={label} />}

        <InputGroup mb='0'>
          <ChakraInput
            id={inputId}
            ref={ref}
            type={show ? 'text' : 'password'}
            variant={variant}
            {...rest}
          />
          <InputRightElement
            height='100%'
            justifyContent='flex-end'
            right='8px'
            width='5.5rem'
          >
            <Button
              _active={{ background: '0' }}
              _focus={{ background: '0' }}
              _hover={{ background: '0' }}
              background='0'
              height='auto'
              minW='25px'
              onClick={handleClick}
              padding='0'
            >
              {show ? (
                <AiFillEyeInvisible
                  color={theme.colors.betaBlack}
                  size='25px'
                />
              ) : (
                <AiFillEye color={theme.colors.betaBlack} size='25px' />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>

        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
