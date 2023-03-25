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
        right: "20px",
        color: "#fff",
        opacity: "1",
        position: "fixed",
        background: "#1976d2",
        height: { xs: "60px", sm: "50px" },
        width: { xs: "60px", sm: "50px" },
        bottom: { xs: "76px", sm: "20px" },
        "&:hover": {
          background: "#1565c0",
        },
      }}
      onClick={onToggle(true)}
    >
      <EditRounded sx={{ fontSize: "30px" }} />
    </IconButton>
  );
};

export default NoteSwipeOpenButton;
