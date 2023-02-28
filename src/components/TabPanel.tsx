import * as React from "react";
import { Box } from "@mui/material";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
  name: string;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, name, ...other } = props;

  return (
    <Box
      role="tabpanel"
      height="calc(100% - 49px)"
      hidden={value !== index}
      id={`${name}-tabpanel-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box height="100%" p={3}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;
