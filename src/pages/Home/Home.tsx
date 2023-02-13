import * as React from "react";
import { Box } from "@mui/material";

import Layout from "../../components/Layout";
import AppContext from "../../auth/context";
import Profile from "./Profile";
import Progress from "./Progress";
import Podcast from "./Podcast";
import Flow from "./Flow";
import WeeklyDose from "./WeeklyDose";
import CurrentTopic from "./CurrentTopic";

const Home = () => {
  const {
    state: { user },
  } = React.useContext(AppContext);

  return (
    <Layout>
      <Progress />

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
          <CurrentTopic />
          <WeeklyDose />
          <Flow />
          <Podcast />
        </Box>

        <Profile user={user} />
      </Box>
    </Layout>
  );
};

export default Home;
