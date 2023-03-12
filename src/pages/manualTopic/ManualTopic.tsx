import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";

import Layout from "../../components/Layout";
import HTMLContent from "../../components/HTMLContent";
import NoteSwipe from "./NoteSwipe";
import useMarkTopicApi from "../../hooks/useMarkTopicApi";

const ManualTopic = () => {
  const { state: topic } = useLocation();
  const isMountedRef = React.useRef(false);
  const { request } = useMarkTopicApi();

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (topic) request(topic);
    }
  }, [topic, request]);

  if (!topic) return <Navigate to="/manuals" />;

  return (
    <Layout title={`Lesson ${topic.number}`}>
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

      <NoteSwipe topicId={topic.id} />
    </Layout>
  );
};

export default ManualTopic;
