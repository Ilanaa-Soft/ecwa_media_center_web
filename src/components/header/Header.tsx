import * as React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowBackRounded } from "@mui/icons-material";

import AppContext from "../../state/context";
import useAuth from "../../auth/useAuth";
import SmallScreenMenu from "./SmallScreenMenu";
import LargeScreenMenu from "./LargeScreenMenu";

type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  const {
    state: { user },
  } = React.useContext(AppContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logOut } = useAuth();

  const handleGoToBack = () => navigate(-1);

  const handleGoToProfile = () => navigate("/profile");

  const handleLogOut = () => logOut();

  return (
    <Box
      py={1}
      px="12px"
      top={0}
      zIndex="1100"
      position="sticky"
      sx={{
        background: "#fff",
        marginBottom: { xs: 3, md: 5 },
        height: { xs: "60px", sm: "auto" },
      }}
      boxShadow="1px 2px 4px rgba(214, 217, 223, .5)"
    >
      <Box
        display="flex"
        marginX="auto"
        height="100%"
        maxWidth="1100px"
        alignItems="center"
        justifyContent="space-between"
      >
        {pathname === "/" ? (
          <Typography fontSize="20px" fontWeight="500">
            Hi, {user?.name?.split(" ")[0]}
          </Typography>
        ) : (
          <>
            <IconButton onClick={handleGoToBack}>
              <ArrowBackRounded />
            </IconButton>
            {title && (
              <Box width="calc(100% - 40px)" sx={{ display: { sm: "none" } }}>
                <Typography
                  noWrap
                  fontSize="20px"
                  fontWeight="600"
                  component="h1"
                >
                  {title}
                </Typography>
              </Box>
            )}
          </>
        )}

        <LargeScreenMenu onLogOut={handleLogOut} />

        {pathname === "/" && (
          <SmallScreenMenu
            onLogOut={handleLogOut}
            onGoToProfile={handleGoToProfile}
          />
        )}
      </Box>
    </Box>
  );
};
export default Header;
