import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

type HTMLContentProps = {
  html: string;
  truncate?: boolean;
};

const useStyles = makeStyles(() => ({
  root: {
    overflow: "auto",
  },
  truncate: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const HTMLContent = ({ html, truncate }: HTMLContentProps) => {
  const classes = useStyles();

  return (
    <Typography
      fontSize="18px"
      className={(classes.root, truncate ? classes.truncate : "")}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default HTMLContent;
