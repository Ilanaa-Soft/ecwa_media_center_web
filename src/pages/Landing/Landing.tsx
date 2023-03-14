import { Box, Typography, Button } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";

import { getUser } from "../../auth/storage";
import logo from "../../assets/ecwalogo.png";
import landingImg from "../../assets/landing.jpg";

const Landing = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleGoToSignUp = () => navigate("/sign-up");

  const handleGoToLogin = () => navigate("/login-code");

  if (user) return <Navigate to="/home" />;

  return (
    <Box
      sx={{
        height: "100vh",
        background: `rgba(0, 0, 0, .8) url(${landingImg}) no-repeat center / cover`,
      }}
    >
      <Box
        mx="auto"
        maxWidth={400}
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Box mb={4} textAlign="center" width="100%">
            <Box
              component="img"
              alt="Ecwa Logo"
              width="150px"
              height="150px"
              src={logo}
            />

            <Box
              mt={2}
              color="#fff"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                component="h1"
                fontSize="26px"
                lineHeight="1.2"
                fontWeight="800"
                letterSpacing="0.2px"
              >
                Ecwa Media Center
              </Typography>
              <Typography maxWidth="250px">
                Get inspiring content to assist you getting closer to Christ
              </Typography>
            </Box>
          </Box>

          <Button
            sx={{
              height: "40px",
              width: "100%",
              background: "#fff",
              marginBottom: "20px",
              borderRadius: "30px",
              border: "1px solid #fff",
              "&:hover": { background: "#fff" },
            }}
            onClick={handleGoToSignUp}
          >
            Get Started
          </Button>

          <Button
            sx={{
              height: "40Px",
              width: "100%",
              color: "#fff",
              borderRadius: "30px",
              background: "#1976d2",
              "&:hover": { background: "#1976d2" },
            }}
            onClick={handleGoToLogin}
          >
            Login to Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
