import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useParams, Navigate } from "react-router-dom";

import AppContext from "../../state/context";
import Layout from "../../components/Layout";
import HTMLContent from "../../components/HTMLContent";

const Hymn = () => {
  const {
    state: { hymns },
  } = React.useContext(AppContext);

  const { id } = useParams();

  const hymn = hymns?.find((hymn) => hymn.id === Number(id));

  if (!hymn) return <Navigate to="/hymns" />;

  return (
    <Layout>
      <Box>
        <Box mb={3}>
          <Typography fontSize="24px" fontWeight="700" component="h2">
            Hymn {hymn.number}
          </Typography>
          <Typography
            fontSize="20px"
            fontWeight="500"
            component="h3"
            textTransform="capitalize"
          >
            {hymn.title}
          </Typography>
        </Box>

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
          {hymn.verses.map((verse) => (
            <Box
              p={2}
              key={verse.id}
              sx={{
                boxShadow:
                  "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
              }}
            >
              <HTMLContent html={verse.content} />
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Hymn;
