import * as Yup from "yup";

const profileSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  mobile: Yup.string().required().label("Phone Number"),
  lcb: Yup.string().required().label("Local Church Board"),
  dcc: Yup.string().required().label("District"),
});

export default profileSchema;
