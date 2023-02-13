import { Box, Typography } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";

import Layout from "../../components/Layout";
import HTMLContent from "../../components/HTMLContent";

const ManualTopic = () => {
  const { state: topic } = useLocation();

  if (!topic) return <Navigate to="/manuals" />;

  return (
    <Layout>
      <Box>
        <Typography fontSize="20px" fontWeight="500" component="h2">
          {topic.bible_text}
        </Typography>
        <Typography fontSize="18px" fontWeight="500" component="h3">
          Introduction
        </Typography>
        <HTMLContent html={topic.introduction} />
      </Box>

      <Box>
        <Typography component="h2" fontSize="20px" fontWeight="500">
          Study
        </Typography>
        <HTMLContent html={topic.content} />
      </Box>
    </Layout>
  );
};

export default ManualTopic;
