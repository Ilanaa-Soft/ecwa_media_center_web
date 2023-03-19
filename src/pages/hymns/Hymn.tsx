import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Hymn as HymnType } from "../../types";

type HymnProps = {
  hymn: HymnType;
  onPushToHymn: (id: number) => void;
};

const useStyles = makeStyles(() => ({
  truncate: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const Hymn = ({ hymn, onPushToHymn }: HymnProps) => {
  const classes = useStyles();

  return (
    <Box
      py="4px"
      borderBottom="1px solid rgba(0, 0, 0, .15)"
      sx={{ cursor: "pointer" }}
      onClick={() => onPushToHymn(hymn.id)}
    >
      <Typography
        component="h2"
        fontWeight="500"
        textTransform="capitalize"
        className={classes.truncate}
      >
        {`${hymn.number}. ${hymn.title}`}
      </Typography>
      <Typography className={classes.truncate} textTransform="capitalize">
        {hymn.extra}
      </Typography>
    </Box>
  );
};

export default Hymn;
