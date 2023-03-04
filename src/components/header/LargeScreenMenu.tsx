import { Box, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

type LargeScreenMenuProp = {
  onLogOut: () => void;
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "Hymns", path: "/hymns" },
  { label: "Manuals", path: "/manuals" },
  { label: "Profile", path: "/profile" },
];

const LargeScreenMenu = ({ onLogOut }: LargeScreenMenuProp) => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          display="inline-block"
          underline="none"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            padding: { sm: "8px", md: "12px" },
            "&.active": { color: "#1976d2" },
          }}
          color="inherit"
          component={NavLink}
          to={item.path}
        >
          {item.label}
        </Link>
      ))}

      <Link
        display="inline-block"
        underline="none"
        sx={{
          fontSize: { xs: "18px", md: "20px" },
          padding: { sm: "8px", md: "12px" },
          verticalAlign: "baseline",
        }}
        color="inherit"
        component="button"
        lineHeight="inherit"
        fontFamily="inherit"
        onClick={onLogOut}
      >
        Log out
      </Link>
    </Box>
  );
};

export default LargeScreenMenu;
