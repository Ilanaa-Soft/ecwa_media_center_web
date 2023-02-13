import * as React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  HouseRounded,
  AutoStoriesRounded,
  AudiotrackRounded,
  TimelineRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AppBottomNavigation = () => {
  const [value, setValue] = React.useState("recents");

  const navigate = useNavigate();

  const handleChange = (e: React.SyntheticEvent, value: string) => {
    setValue(value);
  };

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
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HouseRounded />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Hymns"
          value="hymns"
          icon={<AudiotrackRounded />}
          onClick={() => navigate("/hymns")}
        />
        <BottomNavigationAction
          label="Manuals"
          value="manuals"
          icon={<AutoStoriesRounded />}
          onClick={() => navigate("/manuals")}
        />
        <BottomNavigationAction
          label="Flow"
          value="flow"
          icon={<TimelineRounded />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default AppBottomNavigation;
