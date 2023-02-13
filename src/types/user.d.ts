type AppUser = {
  id: number;
  mobile: string;
  dcc: string;
  lcb: string;
  language: string;
  has_latest_updates: number;
  created_at: string;
  updated_at: string;
};

type User = {
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

type UserProfile = {
  name: string;
  email: string;
  mobile: string;
  dcc: string;
  lcb: string;
};

type UserUpdateProfile = {
  name: string;
  mobile: string;
  dcc: string;
  lcb: string;
};

