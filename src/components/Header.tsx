import * as React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { SettingsOutlined, ArrowBackRounded } from "@mui/icons-material";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

import AppContext from "../state/context";

const Header = () => {
  const {
    state: { user },
  } = React.useContext(AppContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleGoToBack = () => {
    navigate(-1);
  };

  const handleGoToProfile = () => {
    navigate("/profile");
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
            padding: { sm: "12px", md: "16px" },
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
            padding: { sm: "12px", md: "16px" },
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
            padding: { sm: "12px", md: "16px" },
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
            padding: { sm: "12px", md: "16px" },
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
            padding: { sm: "12px", md: "16px" },
          }}
          color="inherit"
          component={RouterLink}
          to="/profile"
        >
          Profile
        </Link>
      </Box>

      {pathname === "/" && (
        <IconButton
          onClick={handleGoToProfile}
          sx={{ display: { sm: "none" } }}
          aria-label="settings"
        >
          <SettingsOutlined sx={{ fontSize: "32px" }} />
        </IconButton>
      )}
    </Box>
  );
};
export default Header;
