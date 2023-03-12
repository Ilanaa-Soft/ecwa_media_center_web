import { Box, Typography } from "@mui/material";

const Quiz = () => {
  return (
    <Box
      p="16px"
      minHeight="180px"
      borderRadius="20px"
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
    >
      <Typography component="h2" fontSize="20px" fontWeight="700" mb={1}>
        Quiz
      </Typography>
      <Typography textAlign="center">
        Get ready to put your knowledge to the test! We're thrilled to announce
        that a quiz feature will be added soon, allowing you to challenge
        yourself and deepen your understanding.
      </Typography>
    </Box>
  );
};

export default Quiz;
