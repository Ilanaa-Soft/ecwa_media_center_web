import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import DialogTransition from "../../components/DialogTransition";
import { Manual, Sponsors } from "../../types";

type ViewSponsorDialogProps = {
  sponsors: Sponsors[];
  manual: Manual;
  open: boolean;
  revoking: boolean;
  onClose: () => void;
  onRevoke: (email: string) => Promise<void>;
};

const ViewSponsorDialog = ({
  manual,
  open,
  sponsors,
  revoking,
  onClose,
  onRevoke,
}: ViewSponsorDialogProps) => {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={onClose}
      TransitionComponent={DialogTransition}
      aria-describedby="alert-dialog-view-sponsor-manual"
    >
      <DialogTitle sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
        {`${manual?.year} ${manual?.language} ${manual?.name}`}
      </DialogTitle>
      <DialogContent>
        {sponsors.length === 0 ? (
          <Typography id="alert-dialog-view-sponsor-manual">
            You are yet to sponsor anyone
          </Typography>
        ) : (
          <>
            <Typography
              mb={1}
              fontWeight="600"
              id="alert-dialog-view-sponsor-manual"
            >
              Emails you have sponsored:
            </Typography>
            {sponsors.map((sponsor) => (
              <Box
                key={sponsor.id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {sponsor.assigned_to}
                {sponsor.claimed === 0 && (
                  <Button
                    loading={revoking}
                    component={LoadingButton}
                    onClick={() => onRevoke(sponsor.assigned_to)}
                  >
                    Revoke
                  </Button>
                )}
              </Box>
            ))}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewSponsorDialog;
