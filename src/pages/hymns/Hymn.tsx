import { Typography, Box } from "@mui/material";

import { Hymn } from "../../types";

type HymnProps = {
  hymn: Hymn;
  onPushToHymn: (id: number) => void;
};

const Hymn = ({ hymn, onPushToHymn }: HymnProps) => {
  return (
    <Box
      py="4px"
      borderBottom="1px solid rgba(0, 0, 0, .15)"
      sx={{ cursor: "pointer" }}
      onClick={() => onPushToHymn(hymn.id)}
    >
      <Typography textTransform="capitalize" fontWeight="500" component="h2">
        {hymn.title}
      </Typography>
      <Typography textTransform="capitalize">{hymn.extra}</Typography>
    </Box>
  );
};

export default Hymn;
