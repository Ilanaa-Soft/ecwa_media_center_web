import { Box, Typography } from "@mui/material";

const Flow = () => {
  return (
    <Box
      p="16px"
      minHeight="180px"
      borderRadius="20px"
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
    >
      <Typography component="h2" fontSize="20px" fontWeight="700" mb={1}>
        Flow
      </Typography>

      <Typography textAlign="center">
        In the coming months. We should get a prelude to Flow. You will be able
        to upload as many contents as you think should be open on the flow
      </Typography>
    </Box>
  );
};

export default Flow;
