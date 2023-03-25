import * as React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import AppContext from "../../state/context";
import Profile from "./Profile";
import Progress from "./Progress";
import Quiz from "./Quiz";
import Flow from "./Flow";
import WeeklyDose from "./WeeklyDose";
import CurrentTopic from "./CurrentTopic";

const Home = () => {
  const {
    state: { user, manuals, dashboard },
  } = React.useContext(AppContext);

  const navigate = useNavigate();

  const { currentTopic, userParticipation } = dashboard;

  const handleRead = () => {
    const manual = manuals.find(
      (manual) => manual.id === currentTopic.manual_id
    );

    if (!manual) return;

    if (manual.paid || manual.sponsored || manual.is_free) {
      const { topics } = manual;
      const topic = topics.find((topic) => topic.id === currentTopic.id);
      if (!topic) return;
      navigate(`/manual-topic`, { state: { manual, topic } });
    } else navigate(`/manuals/${manual.id}`);
  };

  return (
    <Layout>
      <Progress progress={userParticipation} />

      <Box
        sx={{
          display: { md: "grid" },
          columnGap: { md: "35px" },
          gridTemplateColumns: { md: "repeat(12, 1fr)" },
        }}
      >
        <Box
          gap="35px"
          display="grid"
          sx={{
            gridColumn: { md: "span 8" },
            gridTemplateColumns: { sm: "repeat(2, 1fr)" },
          }}
        >
          <CurrentTopic currentTopic={currentTopic} onRead={handleRead} />
          <WeeklyDose currentTopic={currentTopic} />
          <Flow />
          <Quiz />
        </Box>

        <Profile user={user} progress={userParticipation} />
      </Box>
    </Layout>
  );
};

export default Home;
