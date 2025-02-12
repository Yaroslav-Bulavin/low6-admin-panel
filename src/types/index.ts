export type GetContestsRes = {
  contests: ContestType[];
};

export type ContestType = {
  id: number;
  end_date: string;
  is_scored: false;
  jackpot: string;
  prize_pool: string;
  prize_draw_prize_pool: string;
  entry_fee: string;
  jackpot_fee: string;
  prize_pool_fee: string;
  prize_draw_fee: string;
  prize_draw_prize_pool_fee: string;
  winners_count: number | null;
  overall_winnings: number | null;
  winning_numbers: number[];
  winning_number_bonus: number | null;
  prize_draw_winner_ticket_id: number | null;
  created_at: string;
  paytable: Partial<PayTableType>[];
};

export type PayTableType = {
  all_numbers: number;
  correct_numbers: number;
  prize_type: 'percentage' | 'amount' | 'jackpot';
  prize_value: number;
  prize_text: string;
  included_bonus: boolean;
  odds_text: string;
  winners_count: number | null;
  total_winnings: number | null;
};

export type GetContestByIdRes = {
  contest: ContestType;
};

export type CreateContestReqBody = Partial<ContestType>;

export type UpdateContestReqBody = Partial<ContestType> &
  Pick<ContestType, 'id'>;

export type GenerateAdminTokenReqBody = {
  login: string;
  password: string;
};

export type ScoreContestReqBody = {
  contest_id: string;
  winning_number_1: number;
  winning_number_2: number;
  winning_number_3: number;
  winning_number_4: number;
  winning_number_5: number;
  winning_number_6: number;
  winning_number_bonus: number;
  prize_draw_winner_ticket_number: number;
};
