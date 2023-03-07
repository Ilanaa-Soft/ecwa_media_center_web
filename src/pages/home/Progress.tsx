import { Box, Typography } from "@mui/material";

import { UserParticipation } from "../../types";

type ProgressProps = {
  progress: UserParticipation;
};

const Progress = ({ progress }: ProgressProps) => {
  return (
    <Box
      mb={4}
      alignItems="center"
      justifyContent="space-between"
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      <Typography>
        You're on week {progress?.read_topics} of {progress?.current_week}
      </Typography>
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
        {progress?.percentage}%
      </Box>
    </Box>
  );
};

export default Progress;
