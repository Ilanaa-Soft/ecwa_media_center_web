import * as React from "react";
import { Box } from "@mui/material";

import Layout from "../../components/Layout";
import AppContext from "../../state/context";
import ManualsCard from "./ManualsCard";

const Manuals = () => {
  const {
    state: { manuals },
  } = React.useContext(AppContext);

  return (
    <Layout title="Available Manuals">
      <Box
        display="grid"
        sx={{ gridTemplateColumns: { sm: "repeat(2, 1fr)" } }}
        gap={4}
      >
        {manuals?.map((manual, i) => (
          <ManualsCard key={manual.id} manual={manual} />
        ))}
      </Box>
    </Layout>
  );
};

export default Manuals;
