import * as React from "react";
import { Box } from "@mui/material";

import Layout from "../../components/Layout";
import AppContext from "../../auth/context";
import ManualsCard from "./ManualsCard";

const Manuals = () => {
  const {
    state: { manuals },
  } = React.useContext(AppContext);

  return (
    <Layout>
      <Box
        display="grid"
        sx={{ gridTemplateColumns: { sm: "repeat(2, 1fr)" } }}
        gap={4}
      >
        {manuals?.map((manual, i) => (
          <ManualsCard
            manual={manual}
            key={manual.id}
            imgName={`banner${i + 1}`}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default Manuals;
