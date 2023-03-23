import { Box, Typography, Button } from "@mui/material";
import { CurrentTopic as CurrentTopicType } from "../../types";

import dateFormatter from "../../utils/longDateFormatter";

type CurrentTopicProps = {
  currentTopic: CurrentTopicType;
  onRead: () => void;
};

const CurrentTopic = ({ currentTopic, onRead }: CurrentTopicProps) => {
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
      <Typography
        mb="4px"
        component="h2"
        textAlign="center"
        fontSize="20px"
        fontWeight="700"
        maxWidth="270px"
      >
        {currentTopic?.topic}
      </Typography>
      <Typography component="h3" mb="18px">
        {dateFormatter(new Date())}
      </Typography>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          height: "42px",
          borderWidth: "1.5px",
          borderRadius: "10px",
        }}
        onClick={() => onRead()}
      >
        Read Now
      </Button>
    </Box>
  );
};

export default CurrentTopic;
