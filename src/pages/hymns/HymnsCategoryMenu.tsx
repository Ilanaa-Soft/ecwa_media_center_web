import * as React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { TuneRounded } from "@mui/icons-material";

type HymnsCategoryMenuProps = {
  onSelect: (category: string) => void;
};

const HymnsCategoryMenu = ({ onSelect }: HymnsCategoryMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (category: string) => {
    onSelect(category);
    setAnchorEl(null);
  };

  return (
    <Box ml="4px">
      <IconButton
        id="hymns-category-button"
        aria-controls={open ? "hymns-category-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TuneRounded />
      </IconButton>
      <Menu
        id="hymns-category-menu"
        aria-labelledby="hymns-category-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => handleSelect("yoruba")}
          sx={{ display: "block" }}
        >
          <Typography fontSize="18px" fontWeight="500">
            Iwe Orin Yoruba
          </Typography>
          <Typography>Tẹtisi awọn orin iyin rẹ</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelect("english")}
          sx={{ display: "block" }}
        >
          <Typography fontSize="18px" fontWeight="500">
            English Hymns
          </Typography>
          <Typography>Listen to your english hymns</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HymnsCategoryMenu;
