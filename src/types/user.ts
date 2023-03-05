export type AppUser = {
  id: number;
  mobile: string;
  dcc: string;
  lcb: string;
  language: string;
  has_latest_updates: number;
  created_at: string;
  updated_at: string;
};

export type User = {
  id: number;
  role_id: number;
  name: string;
  email: string;
  avatar: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  api_token: string;
  app_user: AppUser;
} | null;

export type UserProfile = {
  name: string;
  email: string;
  mobile: string;
  dcc: string;
  lcb: string;
};

export type UserUpdateProfile = {
  name: string;
  mobile: string;
  dcc: string;
  lcb: string;
};

