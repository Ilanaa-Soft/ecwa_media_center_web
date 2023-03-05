import * as React from "react";
import { Box } from "@mui/material";

import { Header } from "./header";
import BottomNavigation from "./BottomNavigation";

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Box>
      <Header title={title} />
      <Box
        px="16px"
        maxWidth="1100px"
        marginX="auto"
        sx={{ paddingBottom: { xs: "91px", sm: 0 } }}
      >
        {children}
      </Box>
      <BottomNavigation />
    </Box>
  );
};

export default Layout;
