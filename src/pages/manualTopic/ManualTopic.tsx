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
  const locationState = location.state as LocationState;
  const isMountedRef = React.useRef(false);
  const { request } = useMarkTopicApi();
  const isOnline = useNetworkInfo();

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (locationState && isOnline) request(locationState.topic);
    }
  }, [locationState, request, isOnline]);

  if (!locationState) return <Navigate to="/manuals" />;

  return (
    <Layout title={`Lesson ${locationState?.topic.number}`}>
      <Box mb={2}>
        <Typography component="h1" fontSize="18px" fontWeight="600">
          {locationState?.topic.topic}
        </Typography>
        <Typography component="h2" fontSize="16px" fontWeight="600">
          {`Year ${locationState?.manual.year} ${locationState?.manual.name}`}
        </Typography>
        <Typography>{locationState?.topic.aim}</Typography>
      </Box>

      <Box>
        <Typography fontSize="20px" fontWeight="500" component="h2">
          {locationState?.topic.bible_text}
        </Typography>
        <Typography fontSize="18px" fontWeight="500" component="h3">
          Introduction
        </Typography>
        <HTMLContent html={locationState?.topic.introduction} />
      </Box>

      <Box>
        <Typography component="h2" fontSize="20px" fontWeight="500">
          Study
        </Typography>
        <HTMLContent html={locationState?.topic.content} />
      </Box>

      <NoteSwipe topicId={locationState?.topic.id} />
    </Layout>
  );
};

export default ManualTopic;
