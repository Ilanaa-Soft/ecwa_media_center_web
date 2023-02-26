import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import DialogTransition from "../../components/DialogTransition";

type SponsorDialogProps = {
  manual: Manual;
  open: boolean;
  email: string;
  isSuccess: boolean;
  isSubmitting: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSponsor: () => void;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SponsorDialog = ({
  email,
  manual,
  open,
  isSuccess,
  isSubmitting,
  onClose,
  onEmailChange,
  onSponsor,
}: SponsorDialogProps) => {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={onClose}
      TransitionComponent={DialogTransition}
      aria-describedby="alert-dialog-sponsor-manual"
    >
      <DialogTitle sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
        {`${manual?.year} ${manual?.language} ${manual?.name}`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText mb={2} id="alert-dialog-sponsor-manual">
          {!isSuccess
            ? "Please enter the registered email address of the user you will like to sponsor"
            : `Successful! You have sponsored ${email}`}
        </DialogContentText>

        {!isSuccess && (
          <TextField
            autoFocus
            fullWidth
            size="small"
            name="email"
            id="email"
            type="email"
            value={email}
            variant="filled"
            inputMode="email"
            onChange={onEmailChange}
            label="Enter email"
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        {!isSuccess && (
          <Button
            onClick={onSponsor}
            loading={isSubmitting}
            component={LoadingButton}
          >
            Proceed
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default SponsorDialog;
