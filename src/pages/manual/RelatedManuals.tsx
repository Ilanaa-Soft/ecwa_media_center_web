import { Box, Typography } from "@mui/material";

import ManualCard from "./ManualCard";
import { Manual } from "../../types";

type RelatedManualsProps = {
  relatedManuals: Manual[];
};

const RelatedManuals = ({ relatedManuals }: RelatedManualsProps) => {
  return (
    <Box>
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
    </Box>
  );
};

export default RelatedManuals;