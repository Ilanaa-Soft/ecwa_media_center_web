import * as React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Layout from "../../components/Layout";
import AppContext from "../../state/context";
import ManualTopicsCard from "./manualTopicsCard";

const ManualTopics = () => {
  const {
    state: { manuals },
  } = React.useContext(AppContext);

  const { id } = useParams();

  const manual = manuals?.find((manual) => manual.id === Number(id));

  if (!manual) return <Navigate to="/manuals" />;

  return (
    <Layout title={`Year ${manual.year} ${manual.name}`}>
      <Typography
        mb={3}
        component="h1"
        fontSize="20px"
        fontWeight="600"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        {`Year ${manual.year} ${manual.name}`}
      </Typography>

      <Box
        gap={4}
        display="grid"
        sx={{
          gridTemplateColumns: {
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {manual?.topics.map((topic) => (
          <ManualTopicsCard topic={topic} key={topic.id} />
        ))}
      </Box>
    </Layout>
  );
};

export default ManualTopics;
