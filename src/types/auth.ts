export type SignUp = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  dcc: string;
  lcb: string;
  language: string;
};

export type LoginWithCode = {
  email: string;
  code: string;
};

export type RequestLoginCode = { 
  email: string 
};
