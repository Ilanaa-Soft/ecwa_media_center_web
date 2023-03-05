import { IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

type NoteSwipeCloseButtonProps = {
  onToggle: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const NoteSwipeCloseButton = ({ onToggle }: NoteSwipeCloseButtonProps) => {
  return (
    <IconButton
      sx={{
        height: "48px",
        width: "48px",
        position: "absolute",
        top: "0",
        right: "6px",
      }}
      onClick={onToggle(false)}
    >
      <CloseRounded sx={{ fontSize: "30px" }} />
    </IconButton>
  );
};

export default NoteSwipeCloseButton;
