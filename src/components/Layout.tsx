import * as React from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        px="16px"
        maxWidth="1100px"
        marginX="auto"
        sx={{ paddingBottom: { xs: "91px", sm: 0 } }}
      >
        <Header />
        {children}
      </Box>
      <BottomNavigation />
    </>
  );
};

export default Layout;
