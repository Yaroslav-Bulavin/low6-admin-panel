import React from 'react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { loginSchema } from '@/schemas/login.schema';
import { GenerateAdminTokenReqBody } from '@/types';

import WelcomeBackImg from '@/assets/images/welcome_back.png';

import FormInput from '@/elements/FormInput';
import FormPasswordInput from '@/elements/FormPasswordInput';

import { MediaQueriesEnum } from '@/enums/mediaQueries.enum';
import { RoutesEnum } from '@/enums/routes.enum';

import { useJWT } from '@/hooks/useJWT.hook';

import { useGenerateAdminTokenMutation } from '@/services/api.service';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery([MediaQueriesEnum.isMobile]);
  const { setJwt } = useJWT();
  const [triggerGen, { isLoading }] = useGenerateAdminTokenMutation();

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(loginSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const res = await triggerGen(
        formData as GenerateAdminTokenReqBody,
      ).unwrap();
      setJwt(res?.token);
      navigate(RoutesEnum.dashboard);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Flex h='100%' minH='100vh'>
      {isMobile ? (
        <Flex
          alignItems='center'
          h='100%'
          justifyContent='center'
          px='24px'
          w='100%'
        >
          <Box maxW='460px' mx='auto' w='100%'>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput label='Email address' name='login' />
                <FormInput label='Password' name='password' />
                <Button
                  colorScheme='blue'
                  isDisabled={!isValid}
                  isLoading={isLoading}
                  mt='16px'
                  type='submit'
                  w='100%'
                >
                  Login
                </Button>
              </form>
            </FormProvider>
          </Box>
        </Flex>
      ) : (
        <>
          <Flex
            alignItems='center'
            borderRight='1px solid rgba(226, 232, 240, 1)'
            flexDirection='column'
            h='100%'
            justifyContent='center'
            w='40%'
          >
            <Heading as='h3' fontSize='30px' pb='40px'>
              Hi, Welcome Back
            </Heading>
            <Image src={WelcomeBackImg} />
          </Flex>
          <Flex
            alignItems='center'
            h='100%'
            justifyContent='center'
            px='24px'
            w='60%'
          >
            <Box maxW='460px' mx='auto' w='100%'>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormInput label='Email address' name='login' />
                  <FormPasswordInput label='Password' name='password' />
                  <Button
                    colorScheme='blue'
                    isDisabled={!isValid}
                    isLoading={isLoading}
                    mt='16px'
                    type='submit'
                    w='100%'
                  >
                    Login
                  </Button>
                </form>
              </FormProvider>
            </Box>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default LoginPage;
