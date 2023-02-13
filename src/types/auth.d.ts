type SignUp = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  dcc: string;
  lcb: string;
  language: string;
};

type LoginWithCode = {
  email: string;
  code: string;
};

type RequestLoginCode = { 
  email: string 
};
