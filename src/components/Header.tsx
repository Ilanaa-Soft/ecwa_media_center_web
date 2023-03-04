import * as React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import {
  SettingsOutlined,
  ArrowBackRounded,
  LogoutRounded,
} from "@mui/icons-material";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

import AppContext from "../state/context";
import useAuth from "../auth/useAuth";

const Header = () => {
  const {
    state: { user },
  } = React.useContext(AppContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logOut } = useAuth();

  const handleGoToBack = () => navigate(-1);

  const handleGoToProfile = () => navigate("/profile");

  const handleLogOut = () => {
    logOut();
    window.location.href = "/";
  };

  return (
    <Box
      py={1}
      mb={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {pathname === "/" ? (
        <Typography fontSize="20px" fontWeight="500">
          Hi, {user?.name?.split(" ")[0]}
        </Typography>
      ) : (
        <IconButton onClick={handleGoToBack}>
          <ArrowBackRounded />
        </IconButton>
      )}

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Link
          display="inline-block"
          underline="none"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            padding: { sm: "8px", md: "16px" },
          }}
          color="inherit"
          component={RouterLink}
          to="/"
        >
          Home
        </Link>
        <Link
          display="inline-block"
          underline="none"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            padding: { sm: "8px", md: "16px" },
          }}
          color="inherit"
          component={RouterLink}
          to="/hymns"
        >
          Hymns
        </Link>
        <Link
          display="inline-block"
          underline="none"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            padding: { sm: "8px", md: "16px" },
          }}
          color="inherit"
          component={RouterLink}
          to=""
        >
          Flow
        </Link>
        <Link
          display="inline-block"
          underline="none"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            padding: { sm: "8px", md: "16px" },
          }}
          color="inherit"
          component={RouterLink}
          to="/manuals"
        >
          Manuals
        </Link>
        <Link
          display="inline-block"
          underline="none"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            padding: { sm: "8px", md: "16px" },
          }}
          color="inherit"
          component={RouterLink}
          to="/profile"
        >
          Profile
        </Link>
        <Link
          display="inline-block"
          underline="none"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            padding: { sm: "8px", md: "16px" },
            verticalAlign: "baseline",
          }}
          color="inherit"
          component="button"
          lineHeight="inherit"
          fontFamily="inherit"
          onClick={handleLogOut}
        >
          Log out
        </Link>
      </Box>

      {pathname === "/" && (
        <Box sx={{ display: { sm: "none" } }}>
          <IconButton
            onClick={handleLogOut}
            sx={{ marginRight: "6px" }}
            aria-label="settings"
          >
            <LogoutRounded sx={{ fontSize: "32px" }} />
          </IconButton>
          <IconButton onClick={handleGoToProfile} aria-label="settings">
            <SettingsOutlined sx={{ fontSize: "32px" }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
export default Header;
