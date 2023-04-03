import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";

import Layout from "../../components/Layout";
import HTMLContent from "../../components/HTMLContent";
import NoteSwipe from "./NoteSwipe";
import useMarkTopicApi from "../../hooks/useMarkTopicApi";
import useNetworkInfo from "../../hooks/useNetworkInfo";
import { Manual, ManualTopic as Topic } from "../../types";

type LocationState = {
  manual: Manual;
  topic: Topic;
};

const ManualTopic = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const isMountedRef = React.useRef(false);
  const { request } = useMarkTopicApi();
  const isOnline = useNetworkInfo();

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (state && isOnline) request(state.topic);
    }
  }, [state, request, isOnline]);

  if (!state) return <Navigate to="/manuals" />;

  return (
    <Layout title={`Lesson ${state?.topic.number}`}>
      <Box mb={2}>
        <Typography component="h1" fontSize="18px" fontWeight="600">
          {state?.topic.topic}
        </Typography>
        <Typography component="h2" fontSize="16px" fontWeight="600">
          {`Year ${state?.manual.year} ${state?.manual.name}`}
        </Typography>
        <Typography>{state?.topic.aim}</Typography>
      </Box>

      <Box>
        <Typography fontSize="20px" fontWeight="500" component="h2">
          {state?.topic.bible_text}
        </Typography>
        <Typography fontSize="18px" fontWeight="500" component="h3">
          Introduction
        </Typography>
        <HTMLContent html={state?.topic.introduction} />
      </Box>

      <Box>
        <Typography component="h2" fontSize="20px" fontWeight="500">
          Study
        </Typography>
        <HTMLContent html={state?.topic.content} />
      </Box>

      <NoteSwipe topicId={state?.topic.id} />
    </Layout>
  );
};

export default ManualTopic;
