import { Box, Typography } from "@mui/material";

import Badge from "./Badge";
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
        You're on week {progress.read_topics} of {progress.current_week}
      </Typography>
      <Badge label={progress.percentage} />
    </Box>
  );
};

export default Progress;
