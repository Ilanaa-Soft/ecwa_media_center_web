import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  language: Yup.string().required().label("Language"),
  mobile: Yup.string(),
  lcb: Yup.string().required().label("Local Church Board"),
  dcc: Yup.string().required().label("District"),
});

export default signUpSchema