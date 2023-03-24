import * as React from "react";
import { Box } from "@mui/material";

type BadgeProps = {
  label: number;
};

const Badge = ({ label }: BadgeProps) => {
  return (
    <Box
      p={1}
      color="#fff"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="30px"
      height="30px"
      fontSize="14px"
      fontWeight="600"
      sx={{ background: "#46bd84" }}
    >
      {label?.toFixed(2)}%
    </Box>
  );
};

export default Badge;
