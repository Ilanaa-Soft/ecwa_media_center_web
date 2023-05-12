import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  HouseRounded,
  AutoStoriesRounded,
  AudiotrackRounded,
  TimelineRounded,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const getPageValue = (route: string) => {
  switch (route) {
    case "/home":
      return "Home";
    case "/hymns":
      return "Hymns";
    case "/manuals":
      return "Manuals";
    case "/flow":
      return "Flow";
  }
};

const navItems = [
  { label: "Home", path: "/home", icon: <HouseRounded /> },
  {
    label: "Hymns",
    path: "/hymns",
    icon: <AudiotrackRounded />,
  },
  {
    label: "Manuals",
    path: "/manuals",
    icon: <AutoStoriesRounded />,
  },
  { label: "Flow", path: "", icon: <TimelineRounded /> },
];

const AppBottomNavigation = () => {
  const { pathname } = useLocation();
  const value = getPageValue(pathname);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { sm: "none" },
      }}
      elevation={3}
    >
      <BottomNavigation showLabels value={value}>
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            value={item.label}
            component={Link}
            icon={item.icon}
            to={item.path}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default AppBottomNavigation;
