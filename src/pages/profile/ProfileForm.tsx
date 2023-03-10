import { Box, Grid } from "@mui/material";

import Form from "../../components/Form";
import TextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import districts from "../../utils/districts";
import profileSchema from "../../formSchemas/profileSchema";
import { User, UserProfile } from "../../types";

type ProfileFormProps = {
  user: User;
  onSubmit: (formValues: UserProfile) => Promise<void>;
};

const ProfileForm = ({ user, onSubmit }: ProfileFormProps) => {
  return (
    <Box
      py={3}
      px="16px"
      mx="auto"
      mt={6}
      maxWidth="600px"
      borderRadius={2}
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
    >
      <Form
        initialValues={{
          name: user?.name,
          email: user?.email,
          mobile: user?.app_user.mobile || "",
          dcc: user?.app_user.dcc,
          lcb: user?.app_user.lcb,
        }}
        onSubmit={onSubmit}
        validationSchema={profileSchema}
      >
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <TextInput
              size="small"
              fullWidth
              required
              name="name"
              id="full name"
              label="Full Name"
              variant="filled"
              defaultValue={user?.name}
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
              disabled
              defaultValue={user?.email}
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
              defaultValue={user?.app_user.mobile}
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
              variant="filled"
              defaultValue={user?.app_user.dcc}
            />
          </Grid>
          <Grid item xs={12} mb={3}>
            <TextInput
              size="small"
              fullWidth
              required
              name="lcb"
              id="lcb"
              label="Local Church Board"
              variant="filled"
              defaultValue={user?.app_user.lcb}
            />
          </Grid>

          <SubmitButton fullWidth variant="contained" text="Update Profile" />
        </Grid>
      </Form>
    </Box>
  );
};

export default ProfileForm;
