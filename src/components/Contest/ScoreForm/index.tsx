import React, { useEffect, useMemo } from 'react';

import { Button, Flex, Grid, Heading } from '@chakra-ui/react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';

import { ContestType, ScoreContestReqBody } from '@/types';

import FormInput from '@/elements/FormInput';
import FormNumberInput from '@/elements/FormNumberInput';

import { useScoreContestMutation } from '@/services/api.service';

interface ScoreFormProps {
  contest: ContestType | undefined;
}
export const ScoreForm: React.FC<ScoreFormProps> = ({ contest }) => {
  const defaultValues = useMemo(
    () => ({
      winning_number_1: contest?.winning_numbers?.[0] ?? undefined,
      winning_number_2: contest?.winning_numbers?.[1] ?? undefined,
      winning_number_3: contest?.winning_numbers?.[2] ?? undefined,
      winning_number_4: contest?.winning_numbers?.[3] ?? undefined,
      winning_number_5: contest?.winning_numbers?.[4] ?? undefined,
      winning_number_6: contest?.winning_numbers?.[5] ?? undefined,
      winning_number_bonus: contest?.winning_number_bonus || undefined,
      prize_draw_winner_ticket_id:
        contest?.prize_draw_winner_ticket_id || undefined,
    }),
    [contest],
  );

  const methods = useForm({
    mode: 'all',
    defaultValues,
  });
  console.log({
    winning_number_1: contest?.winning_numbers?.[0] ?? undefined,
    winning_number_2: contest?.winning_numbers?.[1] ?? undefined,
    winning_number_3: contest?.winning_numbers?.[2] ?? undefined,
    winning_number_4: contest?.winning_numbers?.[3] ?? undefined,
    winning_number_5: contest?.winning_numbers?.[4] ?? undefined,
    winning_number_6: contest?.winning_numbers?.[5] ?? undefined,
    winning_number_bonus: contest?.winning_number_bonus || undefined,
    prize_draw_winner_ticket_id:
      contest?.prize_draw_winner_ticket_id || undefined,
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const [triggerScore, { isLoading }] = useScoreContestMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const preparedBody = {
        ...formData,
        prize_draw_winner_ticket_number: formData.prize_draw_winner_ticket_id,
        contest_id: String(contest?.id),
      } as ScoreContestReqBody;

      await triggerScore(preparedBody);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Flex alignItems='center' justifyContent='space-between' mb='50px'>
        <Heading as='h4' fontSize='24px'>
          Score
        </Heading>
        <Button
          colorScheme='green'
          isLoading={isLoading}
          leftIcon={<FaPlus fill='white' />}
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </Flex>

      <FormProvider {...methods}>
        <form>
          <Grid gap='24px' templateColumns='repeat(auto-fill, 100px)'>
            <FormInput label='Winning number 1' name='winning_number_1' />
            <FormNumberInput label='Winning number 2' name='winning_number_2' />
            <FormNumberInput label='Winning number 3' name='winning_number_3' />
            <FormNumberInput label='Winning number 4' name='winning_number_4' />
            <FormNumberInput label='Winning number 5' name='winning_number_5' />
            <FormNumberInput label='Winning number 6' name='winning_number_6' />
            <FormNumberInput label='Bonus number' name='winning_number_bonus' />
            <FormInput
              label='Winning ticket ID'
              name='prize_draw_winner_ticket_id'
            />
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};
