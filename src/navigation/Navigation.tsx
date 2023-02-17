import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { SignUp } from "../pages/signUp";
import { RequestLogin } from "../pages/requestLogIn";
import { Login } from "../pages/login";
import { Manuals } from "../pages/manuals";
import { Manual } from "../pages/manual";
import { ManualTopics } from "../pages/manualTopics";
import { ManualTopic } from "../pages/manualTopic";
import { Hymns } from "../pages/hymns";
import { Hymn } from "../pages/hymn";
import { Profile } from "../pages/profile";
import RequireAuth from "../components/RequireAuth";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login-code" element={<RequestLogin />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/manuals"
        element={
          <RequireAuth>
            <Manuals />
          </RequireAuth>
        }
      />
      <Route
        path="/manuals/:id"
        element={
          <RequireAuth>
            <Manual />
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path="/manual-topics/:id"
        element={
          <RequireAuth>
            <ManualTopics />
          </RequireAuth>
        }
      />
      <Route
        path="/manual-topic"
        element={
          <RequireAuth>
            <ManualTopic />
          </RequireAuth>
        }
      />
      <Route
        path="/hymns"
        element={
          <RequireAuth>
            <Hymns />
          </RequireAuth>
        }
      />
      <Route
        path="/hymns/:id"
        element={
          <RequireAuth>
            <Hymn />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default Navigation;
