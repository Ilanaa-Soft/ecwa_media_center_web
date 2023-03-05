import { Box, Typography } from "@mui/material";

const Progress = () => {
  return (
    <Box
      mb={4}
      alignItems="center"
      justifyContent="space-between"
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      <Typography>You're on week 32 of 52</Typography>
      <Box
        color="#fff"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="30px"
        width="52px"
        height="30px"
        fontSize="14px"
        fontWeight="600"
        sx={{ background: "#46bd84" }}
      >
        80%
      </Box>
    </Box>
  );
};

export default Progress;
