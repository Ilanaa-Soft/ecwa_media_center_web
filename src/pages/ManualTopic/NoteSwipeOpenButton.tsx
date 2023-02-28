import { IconButton } from "@mui/material";
import { EditRounded } from "@mui/icons-material";

type NoteSwipeOpenButtonProps = {
  onToggle: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const NoteSwipeOpenButton = ({ onToggle }: NoteSwipeOpenButtonProps) => {
  return (
    <IconButton
      sx={{
        height: "60px",
        width: "60px",
        position: "fixed",
        bottom: "80px",
        right: "30px",
        background: "grey",
        color: "#fff",
        opacity: "1",
        "&:hover": {
          background: "grey",
        },
      }}
      onClick={onToggle(true)}
    >
      <EditRounded sx={{ fontSize: "30px" }} />
    </IconButton>
  );
};

export default NoteSwipeOpenButton;
