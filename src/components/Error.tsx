import { Box, Button, Typography } from "@mui/material";

type ErrorProps = {
  onTryAgain: () => void;
};

const Error = ({ onTryAgain }: ErrorProps) => {
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
      <Typography
        component="h1"
        fontWeight="700"
        sx={{ fontSize: { xs: "20px", sm: "24px" } }}
      >
        Something Went Wrong
      </Typography>

      <Typography
        fontSize="18px"
        sx={{ maxWidth: { xs: "315px", sm: "445px" } }}
      >
        An error occurred! This might be due to a failing network. Check your
        internet connection and try again.
      </Typography>

      <Button onClick={onTryAgain}>Try Again</Button>
    </Box>
  );
};

export default Error;
