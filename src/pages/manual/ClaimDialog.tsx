import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  DialogTitle,
} from "@mui/material";

import DialogTransition from "../../components/DialogTransition";
import { Manual } from "../../types";

type ClaimDialogProps = {
  manual: Manual;
  open: boolean;
  onClose: () => void;
};

const ClaimDialog = ({ manual, open, onClose }: ClaimDialogProps) => {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={onClose}
      TransitionComponent={DialogTransition}
      aria-describedby="alert-dialog-claim-manual"
    >
      <DialogTitle sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
        {`${manual?.year} ${manual?.language} ${manual?.name}`}
      </DialogTitle>
      <DialogContent>
        <Typography mb={2} id="alert-dialog-claim-manual">
          Successful! You have claimed this manual
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClaimDialog;
