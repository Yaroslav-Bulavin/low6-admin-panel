import React from 'react';

import FormDatePicker from '@/elements/FormDatePicker';
import FormInput from '@/elements/FormInput';

export const ContestForm = () => {
  return (
    <form>
      <FormDatePicker label='End date' name='end_date' portalId='end_date' />
      <FormInput label='Jackpot' name='jackpot' />
      <FormInput label='Jackpot fee' name='jackpot_fee' />
      <FormInput label='Entry fee' name='entry_fee' />
      <FormInput label='Prize draw fee' name='prize_draw_fee' />
      <FormInput label='Prize draw prize pool' name='prize_draw_prize_pool' />
      <FormInput label='Prize pool' name='prize_pool' />
      <FormInput label='Prize pool fee' name='prize_pool_fee' />
    </form>
  );
};
