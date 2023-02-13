import { Box, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink, Navigate, useLocation } from "react-router-dom";
import * as Yup from "yup";

import TextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import Form from "../../components/Form";
import logo from "../../assets/ecwalogo.png";
import { loginWithCode } from "../../services/authService";
import useAuth from "../../auth/useAuth";
import { getUser } from "../../auth/storage";
import toastExpectedError from "../../utils/toastExpectedError";

type FormValues = {
  code: string;
};

const validationSchema = Yup.object().shape({
  code: Yup.string().required().label("Code"),
});

const Login = () => {
  const { state: email } = useLocation();
  const { login } = useAuth();
  const user = getUser();

  const handleSubmit = async (formValues: FormValues) => {
    try {
      const { data: user } = await loginWithCode({ ...formValues, email });
      login(user);

      window.location.href = "/";
    } catch (ex) {
      toastExpectedError(ex);
    }
  };

  if (user) return <Navigate to="/" />;

  if (!email) return <Navigate to="/login-code" />;

  return (
    <Box px="16px" height="100vh" display="flex" alignItems="center">
      <Grid
        p={4}
        mt={4}
        container
        mx="auto"
        maxWidth={400}
        borderRadius={2}
        boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
      >
        <Box my={4} textAlign="center" width="100%">
          <Box
            component="img"
            alt="Ecwa Logo"
            width="150px"
            height="150px"
            src={logo}
          />
          <Typography
            mt={1}
            fontSize="26px"
            letterSpacing="0.2px"
            lineHeight="1.2"
            fontWeight="800"
          >
            Welcome Back
          </Typography>
          <Typography>Enter your login code</Typography>
        </Box>
        <Form
          initialValues={{ code: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Box mb={3}>
            <TextInput
              size="small"
              fullWidth
              required
              name="code"
              id="login code"
              type="password"
              label="Enter your login code"
              variant="filled"
            />
          </Box>

          <SubmitButton fullWidth variant="contained" text="Login" />
        </Form>

        <Box mt={2} width="100%" textAlign="center">
          Code expired?
          <Link component={RouterLink} ml="4px" to="/login-code">
            Request another
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
