import React, { useEffect, useMemo } from 'react';

import {
  Button,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import { ContestForm } from '@/components/Contest/ContestForm';
import { PayTable } from '@/components/Contest/PayTable';
import { ScoreForm } from '@/components/Contest/ScoreForm';

import FormDatePicker from '@/elements/FormDatePicker';
import FormInput from '@/elements/FormInput';

import { RoutesEnum } from '@/enums/routes.enum';

import { createPath } from '@/routes/util';

import {
  useCreateContestMutation,
  useGetContestByIdQuery,
  useUpdateContestMutation,
} from '@/services/api.service';

const ContestPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetContestByIdQuery(Number(id), {
    skip: !id || id === 'new',
    refetchOnMountOrArgChange: true,
  });

  const [triggerCreate, { isLoading: isCreateLoading }] =
    useCreateContestMutation();
  const [triggerUpdate, { isLoading: isUpdateLoading }] =
    useUpdateContestMutation();

  const formDefaultValues = useMemo(
    () => ({
      end_date: data?.contest?.end_date && new Date(data?.contest?.end_date),
      jackpot: data?.contest?.jackpot,
      jackpot_fee: data?.contest?.jackpot_fee,
      entry_fee: data?.contest?.entry_fee,
      prize_draw_fee: data?.contest?.prize_draw_fee,
      prize_draw_prize_pool: data?.contest?.prize_draw_prize_pool,
      prize_pool: data?.contest?.prize_pool,
      prize_pool_fee: data?.contest?.prize_pool_fee,
      paytable: data?.contest?.paytable || [],
    }),
    [data],
  );

  const methods = useForm({
    mode: 'all',
    defaultValues: data?.contest ? formDefaultValues : undefined,
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'paytable',
  });

  useEffect(() => {
    reset(formDefaultValues);
  }, [formDefaultValues]);

  const handleCreateContest = async (formData: FieldValues) => {
    try {
      await triggerCreate({
        ...formData,
        end_date: formData['end_date'].toISOString(),
      });
      navigate(RoutesEnum.contests);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateContest = async (formData: FieldValues) => {
    try {
      await triggerUpdate({
        ...formData,
        end_date: formData['end_date'].toISOString(),
        id: data?.contest?.id as number,
      });
      navigate(RoutesEnum.contests);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    console.log('formData', formData);
    if (id === 'new') {
      return await handleCreateContest(formData);
    }
    await handleUpdateContest(formData);
  };

  const handleAddPrizeLevel = () => {
    append({
      correct_numbers: 0,
      included_bonus: false,
      odds_text: '',
      prize_text: '',
      prize_type: 'jackpot',
      prize_value: 0,
    });
  };

  return (
    <div>
      <Flex alignItems='center' justifyContent='space-between' mb='36px'>
        <Heading as='h4' fontSize='24px' fontWeight='700'>
          Contest
        </Heading>
        <Button
          colorScheme='green'
          leftIcon={<FaPlus fill='white' />}
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </Flex>

      <FormProvider {...methods}>
        <Tabs>
          <TabList>
            <Tab>Contest</Tab>
            <Tab>Score</Tab>
            <Tab>Paytable</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ContestForm />
            </TabPanel>
            <TabPanel>
              <ScoreForm contest={data?.contest} />
            </TabPanel>
            <TabPanel>
              <PayTable fields={fields} remove={remove} />
              <Button
                colorScheme='blue'
                leftIcon={<FaPlus />}
                my='24px'
                onClick={handleAddPrizeLevel}
                variant='outline'
              >
                Add prize level
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </FormProvider>
    </div>
  );
};

export default ContestPage;
