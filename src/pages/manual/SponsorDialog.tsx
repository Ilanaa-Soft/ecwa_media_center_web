import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import DialogTransition from "../../components/DialogTransition";
import { Manual } from "../../types";

type SponsorDialogProps = {
  manual: Manual;
  open: boolean;
  email: string;
  numOfCopies: number;
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
  numOfCopies,
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
        {numOfCopies >= 2 ? (
          <>
            <Typography mb={2} id="alert-dialog-sponsor-manual">
              {!isSuccess
                ? "Please enter the registered email address of the user you will like to sponsor"
                : `Successful! You have sponsored ${email}`}
            </Typography>

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
          </>
        ) : (
          <>
            <Typography mb={2} id="alert-dialog-sponsor-manual">
             You can't sponsor this manual as you don't have an extra copy to give out
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        {!isSuccess && numOfCopies >= 2 && (
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
