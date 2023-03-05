import { Box, Typography } from "@mui/material";

const WeeklyDose = () => {
  return (
    <Box
      p="16px"
      minHeight="180px"
      borderRadius="20px"
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
    >
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid #cbd5e1"
      >
        <Box>
          <Typography component="h2" fontSize="18px" fontWeight="500">
            Weekly Dose
          </Typography>
          <Typography component="h3" fontSize="15px" fontWeight="400">
            John 1:5 NLT
          </Typography>
        </Box>

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
          style={{ background: "#46bd84" }}
        >
          100%
        </Box>
      </Box>
      <Typography pt="16px" textAlign="center">
        The Light Shine in the darkness, and the darkness can never extinguish
        it
      </Typography>
    </Box>
  );
};

export default WeeklyDose;
