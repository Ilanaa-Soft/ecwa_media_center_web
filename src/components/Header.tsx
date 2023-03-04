import * as React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  SettingsOutlined,
  ArrowBackRounded,
  LogoutRounded,
} from "@mui/icons-material";

import AppContext from "../state/context";
import useAuth from "../auth/useAuth";

type HeaderProps = {
  title?: string;
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "Hymns", path: "/hymns" },
  { label: "Manuals", path: "/manuals" },
  { label: "Profile", path: "/profile" },
];

const Header = ({ title }: HeaderProps) => {
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
      px="12px"
      top={0}
      zIndex="1100"
      position="sticky"
      sx={{ background: "#fff", marginBottom: { xs: 3, md: 5 } }}
      boxShadow="1px 2px 4px rgba(214, 217, 223, .5)"
    >
      <Box
        display="flex"
        marginX="auto"
        maxWidth="1100px"
        alignItems="center"
        justifyContent="space-between"
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

        {title && (
          <Box
            textAlign="center"
            width="calc(100% - 40px)"
            sx={{ display: { sm: "none" } }}
          >
            <Typography noWrap fontSize="24px" fontWeight="600" component="h1">
              {title}
            </Typography>
          </Box>
        )}

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              display="inline-block"
              underline="none"
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                padding: { sm: "8px", md: "12px" },
                "&.active": { color: "#1976d2" },
              }}
              color="inherit"
              component={NavLink}
              to={item.path}
            >
              {item.label}
            </Link>
          ))}

          <Link
            display="inline-block"
            underline="none"
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              padding: { sm: "8px", md: "12px" },
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
    </Box>
  );
};
export default Header;
