import { Box, Typography, Button } from "@mui/material";

const CurrentTopic = () => {
  return (
    <Box
      p="16px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="180px"
      borderRadius="20px"
      justifyContent="center"
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
    >
      <Typography component="h2" mb="4px" fontSize="20px" fontWeight="700">
        Signs of Life
      </Typography>
      <Typography component="h3" mb="18px">
        October 20, 2022
      </Typography>
      <Button
        variant="outlined"
        fullWidth
        sx={{
          height: "42px",
          borderWidth: "1.5px",
          borderRadius: "10px",
        }}
      >
        Read Now
      </Button>
    </Box>
  );
};

export default CurrentTopic;
