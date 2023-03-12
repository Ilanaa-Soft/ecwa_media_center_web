export type Wallet = {
  id: number;
  user_id: number;
  currency: string;
  balance: number;
  created_at: string;
  updated_at: string;
};

export type Account = {
  id: number;
  user_id: number;
  account_name: string;
  account_number: string;
  bank: string;
  currency: string;
  customer_code: string;
  created_at: string;
  updated_at: string;
};
