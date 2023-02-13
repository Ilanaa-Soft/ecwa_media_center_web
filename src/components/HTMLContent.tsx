import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

type HTMLContentProps = {
  html: string;
};

const useStyles = makeStyles(() => ({
  root: {
    overflow: "auto",
  },
}));

const HTMLContent = ({ html }: HTMLContentProps) => {
  const classes = useStyles();

  return (
    <Typography
      fontSize="18px"
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default HTMLContent;
