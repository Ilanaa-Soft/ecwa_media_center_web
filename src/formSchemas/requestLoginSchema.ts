import * as Yup from "yup";

const requestLoginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export default requestLoginSchema;
