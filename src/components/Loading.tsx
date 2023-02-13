import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";

import setting from "../assets/loading.json";

const Loading = () => {
  return (
    <Box
      px="16px"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Lottie animationData={setting} loop={true} />
      <Typography component="h1" fontSize="26px" fontWeight="500">
        Loading...
      </Typography>
      <Typography fontSize="18px">
        Please wait while we download your materials
      </Typography>
    </Box>
  );
};

export default Loading;
