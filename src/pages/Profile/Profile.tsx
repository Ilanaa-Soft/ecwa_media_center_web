import * as React from "react";

import AppContext from "../../state/context";
import Layout from "../../components/Layout";
import ProfileForm from "./ProfileForm";
import ProfileInfo from "./ProfileInfo";
import toastExpectedError from "../../utils/toastExpectedError";
import { updateUser } from "../../services/userService";
import { storeUser } from "../../auth/storage";

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

      storeUser(updatedUser);
      dispatch({ type: "SET_USER", payload: updatedUser });
      setEdit(false);
    } catch (ex) {
      toastExpectedError(ex);
    }
  };

  const handleEdit = () => setEdit(true);

  return (
    <Layout>
      {edit ? (
        <ProfileForm user={user} onSubmit={handleSubmit} />
      ) : (
        <ProfileInfo user={user} onEdit={handleEdit} />
      )}
    </Layout>
  );
};

export default Profile;
