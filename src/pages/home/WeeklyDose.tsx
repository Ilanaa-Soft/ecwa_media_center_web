import { Box, Typography } from "@mui/material";
import { Event } from "@mui/icons-material";

import { CurrentTopic } from "../../types";

type WeeklyDoseProps = {
  currentTopic: CurrentTopic;
};

const WeeklyDose = ({ currentTopic }: WeeklyDoseProps) => {
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
            {currentTopic?.bible_text}
          </Typography>
        </Box>

        <Event sx={{ fontSize: 40, color: "#46bd84" }} />
      </Box>
      <Typography pt="16px" textAlign="center">
        {currentTopic?.aim}
      </Typography>
    </Box>
  );
};

export default WeeklyDose;
