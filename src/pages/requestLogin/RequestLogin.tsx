import { Box, Link, Grid, Typography } from "@mui/material";
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

import TextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import Form from "../../components/Form";
import logo from "../../assets/ecwalogo.png";
import { requestLoginCode } from "../../services/authService";
import { getStorageUser } from "../../auth/storage";
import requestLoginSchema from "../../formSchemas/requestLoginSchema";
import toastExpectedError from "../../utils/toastExpectedError";
import { RequestLoginCode } from "../../types";

const RequestLogin = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const user = getStorageUser();

  const handleSubmit = async (formValues: RequestLoginCode) => {
    try {
      await requestLoginCode(formValues);

      alert.show(
        "Hi👋, a login code has been sent to your email address, use the code to login into your account."
      );

      navigate("/login", { state: formValues.email });
    } catch (ex) {
      toastExpectedError(ex);
    }
  };

  if (user) return <Navigate to="/home" />;

  return (
    <Box px={2} height="100vh" display="flex" alignItems="center">
      <Grid
        px={2}
        py={4}
        container
        mx="auto"
        maxWidth={400}
        borderRadius={2}
        boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
      >
        <Box mb={4} textAlign="center" width="100%">
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
          <Typography>Enter your email to request a login code</Typography>
        </Box>
        <Form
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
          validationSchema={requestLoginSchema}
        >
          <Box mb={3}>
            <TextInput
              fullWidth
              required
              name="email"
              id="email"
              type="email"
              label="Email"
              variant="filled"
            />
          </Box>

          <SubmitButton fullWidth variant="contained" text="Send Code" />
        </Form>

        <Box mt={2} width="100%" textAlign="center">
          Don't have an account?
          <Link component={RouterLink} ml="4px" to="/sign-up">
            Create one
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default RequestLogin;
