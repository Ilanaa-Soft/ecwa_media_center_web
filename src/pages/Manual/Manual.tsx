import * as React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Layout from "../../components/Layout";
import AppContext from "../../state/context";
import ManualDetails from "./ManualDetails";
import ManualCard from "./ManualCard";

const Manual = () => {
  const {
    state: { manuals },
  } = React.useContext(AppContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleOpenManual = (id: number) => {
    navigate(`/manual-topics/${id}`);
  };

  const manual = manuals?.find((manual) => manual.id === Number(id));
  const relatedManuals = manuals?.filter((manual) => manual.id !== Number(id));

  if (!manual) return <Navigate to="/manuals" />;

  return (
    <Layout>
      <ManualDetails manual={manual} onOpen={handleOpenManual} />

      <Typography component="h2" fontWeight="600" my={2} fontSize="20px">
        Related Manuals
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
        {relatedManuals.map((manual, i) => (
          <ManualCard
            manual={manual}
            key={manual.id}
            imgName={`banner${i + 1}`}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default Manual;
