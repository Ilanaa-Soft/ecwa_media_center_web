import * as React from "react";
import { Box, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { LogoutRounded, Person, SettingsOutlined } from "@mui/icons-material";

type SmallScreenMenuProps = {
  onGoToProfile: () => void;
  onLogOut: () => void;
};

const SmallScreenMenu = (props: SmallScreenMenuProps) => {
  const { onGoToProfile, onLogOut } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: { sm: "none" } }}>
      <IconButton
        id="setting-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "setting-menu" : undefined}
        onClick={handleClick}
      >
        <SettingsOutlined sx={{ fontSize: "32px" }} />
      </IconButton>

      <Menu
        id="setting-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "setting-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={onGoToProfile}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={onLogOut}>
          <ListItemIcon>
            <LogoutRounded />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SmallScreenMenu;
