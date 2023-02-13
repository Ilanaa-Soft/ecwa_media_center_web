import { Box, Typography } from "@mui/material";

const Podcast = () => {
  return (
    <Box
      p="16px"
      minHeight="180px"
      borderRadius="20px"
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
    >
      <Typography component="h2" fontSize="20px" fontWeight="700" mb={1}>
        Podcast
      </Typography>
      <Typography textAlign="center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        dignissimos quibusdam vel illo est magni delectus velit eius obcaecati
      </Typography>
    </Box>
  );
};

export default Podcast;
