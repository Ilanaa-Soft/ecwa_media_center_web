import { Box, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate, Navigate } from "react-router-dom";
import { useAlert } from "react-alert";

import TextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import Form from "../../components/Form";
import { getStorageUser } from "../../auth/storage";
import { signUp } from "../../services/authService";
import districts from "../../formSelectOptions/districts";
import languages from "../../formSelectOptions/languages";
import toastExpectedError from "../../utils/toastExpectedError";
import signUpSchema from "../../formSchemas/signUpSchema";
import logo from "../../assets/ecwalogo.png";
import { SignUp as SignUpType } from "../../types";

const SignUp = () => {
  const user = getStorageUser();
  const alert = useAlert();
  const navigate = useNavigate();

  if (user) return <Navigate to="/home" />;

  const handleSubmit = async (formValues: SignUpType) => {
    try {
      await signUp(formValues);

      alert.show(
        "Hi👋, your registration has been completed. Enter your email address to request a login code."
      );

      return <Navigate to="/login-code" />;
    } catch (ex) {
      toastExpectedError(ex);
    }
  };

  return (
    <Box px={2} display="flex">
      <Grid
        px={2}
        py={4}
        my={4}
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
            variant="h1"
            fontSize="26px"
            lineHeight="1.2"
            fontWeight="800"
            letterSpacing="0.2px"
          >
            Create Account
          </Typography>
          <Typography>Please tell us who you are</Typography>
        </Box>
        <Form
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            lcb: "",
            language: "",
            dcc: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={signUpSchema}
        >
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextInput
                size="small"
                fullWidth
                required
                name="name"
                id="fullname"
                label="Full Name"
                variant="filled"
              />
            </Grid>

            <Grid item xs={12}>
              <TextInput
                size="small"
                fullWidth
                required
                name="email"
                id="email"
                type="email"
                label="Email"
                variant="filled"
              />
            </Grid>

            <Grid item xs={12}>
              <TextInput
                size="small"
                fullWidth
                required
                select
                name="language"
                id="language"
                options={languages}
                label="Select Language"
                defaultValue=""
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                size="small"
                fullWidth
                name="mobile"
                id="mobile"
                type="tel"
                label="Phone Number"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                size="small"
                fullWidth
                required
                select
                name="dcc"
                id="dcc"
                options={districts}
                label="Select District"
                defaultValue=""
                variant="filled"
              />
            </Grid>

            <Grid item xs={12} mb={2}>
              <TextInput
                size="small"
                fullWidth
                required
                name="lcb"
                id="lcb"
                label="Local Church Board"
                variant="filled"
                multiline
              />
            </Grid>

            <SubmitButton
              fullWidth
              variant="contained"
              text="Finish Registration"
            />
          </Grid>
        </Form>
        <Box mt={2} width="100%" textAlign="center">
          Already have an account?
          <Link component={RouterLink} ml="4px" to="/login-code">
            Login
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default SignUp;
