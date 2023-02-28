import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";

import setting from "../assets/loading.json";

type LoadingProps = {
  text: string;
};
const Loading = ({ text }: LoadingProps) => {
  return (
    <Box
      px="16px"
      height="100%"
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
      <Typography fontSize="18px">{text}</Typography>
    </Box>
  );
};

export default Loading;
