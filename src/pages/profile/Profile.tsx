import * as React from "react";

import AppContext from "../../state/context";
import Layout from "../../components/Layout";
import ProfileForm from "./ProfileForm";
import ProfileInfo from "./ProfileInfo";
import toastExpectedError from "../../utils/toastExpectedError";
import { updateUser } from "../../services/userService";
import { setStorageUser } from "../../auth/storage";
import { UserProfile } from "../../types";

const Profile = () => {
  const [edit, setEdit] = React.useState(false);

  const {
    state: { user },
    dispatch,
  } = React.useContext(AppContext);

  const handleSubmit = async (formValues: UserProfile) => {
    const { email, ...request } = formValues;

    try {
      const { data: updatedUser } = await updateUser(request);

      setStorageUser(updatedUser);
      dispatch({ type: "SET_USER", payload: updatedUser });
      setEdit(false);
    } catch (ex) {
      toastExpectedError(ex);
    }
  };

  const handleEdit = () => setEdit(true);

  return (
    <Layout title="Profile Settings">
      {edit ? (
        <ProfileForm user={user} onSubmit={handleSubmit} />
      ) : (
        <ProfileInfo user={user} onEdit={handleEdit} />
      )}
    </Layout>
  );
};

export default Profile;
