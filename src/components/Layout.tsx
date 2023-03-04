import * as React from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Box
        px="16px"
        maxWidth="1100px"
        marginX="auto"
        sx={{ paddingBottom: { xs: "91px", sm: 0 } }}
      >
        <Header title={title} />
        {children}
      </Box>
      <BottomNavigation />
    </>
  );
};

export default Layout;
