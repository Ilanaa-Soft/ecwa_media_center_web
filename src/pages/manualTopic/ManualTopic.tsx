import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";

import Layout from "../../components/Layout";
import HTMLContent from "../../components/HTMLContent";
import NoteSwipe from "./NoteSwipe";
import useMarkTopicApi from "../../hooks/useMarkTopicApi";

const ManualTopic = () => {
  const { state } = useLocation();
  const { manual, topic } = state;
  const isMountedRef = React.useRef(false);
  const { request } = useMarkTopicApi();

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (state) request(state.topic);
    }
  }, [state, request]);

  if (!state) return <Navigate to="/manuals" />;
  
  return (
    <Layout title={`Lesson ${topic.number}`}>
      <Box mb={2}>
        <Typography component="h1" fontSize="18px" fontWeight="600">
          {topic.topic}
        </Typography>
        <Typography component="h2" fontSize="16px" fontWeight="600">
          {`Year ${manual.year} ${manual.name}`}
        </Typography>
        <Typography>{topic.aim}</Typography>
      </Box>

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
