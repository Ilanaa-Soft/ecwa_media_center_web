import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  code: Yup.string().required().label("Code"),
});

export default loginSchema;

