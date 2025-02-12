import React, { useState } from 'react';

import { Card, Flex, Grid, IconButton } from '@chakra-ui/react';
import {
  FieldArrayWithId,
  FieldValues,
  useFieldArray,
  UseFieldArrayRemove,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { MdDelete } from 'react-icons/md';

import { FormCheckbox } from '@/elements/FormCheckbox';
import FormInput from '@/elements/FormInput';
import { FormSelect } from '@/elements/FormSelect';

import { PrizeTypesEnum } from '@/enums/prizeTypes.enum';

interface PayTableProps {
  fields: FieldArrayWithId<FieldValues, string, 'id'>[];
  remove: UseFieldArrayRemove;
}
export const PayTable: React.FC<PayTableProps> = ({ fields, remove }) => {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Flex flexDirection='column' gap='24px'>
        {fields.map((item, index) => (
          <Card key={item.id} p='16px'>
            <IconButton
              aria-label='delete'
              icon={<MdDelete />}
              ml='auto'
              onClick={() => remove(index)}
              w='fit-content'
            />
            <Grid
              alignItems='center'
              gap='16px'
              templateColumns='repeat(auto-fill, 200px)'
            >
              <FormInput
                label='Correct numbers'
                name={`paytable.${index}.correct_numbers`}
              />
              <FormInput
                label='Odds text'
                name={`paytable.${index}.odds_text`}
              />
              <FormInput
                label='Prize text'
                name={`paytable.${index}.prize_text`}
              />
              <FormSelect
                label='Prize type'
                name={`paytable.${index}.prize_type`}
                options={[
                  { value: PrizeTypesEnum.jackpot, label: 'Jackpot' },
                  { value: PrizeTypesEnum.amount, label: 'Amount' },
                  { value: PrizeTypesEnum.percentage, label: 'Percentage' },
                ]}
              />
              <FormInput
                label='Prize value'
                name={`paytable.${index}.prize_value`}
              />
              <FormCheckbox name={`paytable.${index}.included_bonus`}>
                Included bonus
              </FormCheckbox>
            </Grid>
          </Card>
        ))}
      </Flex>
    </form>
  );
};
