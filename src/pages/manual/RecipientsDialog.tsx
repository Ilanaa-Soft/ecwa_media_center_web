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
  revokingIndex: number;
  onClose: () => void;
  onRevoke: (email: string, index: number) => Promise<void>;
};

const ViewSponsorDialog = ({
  manual,
  open,
  sponsors,
  revoking,
  revokingIndex,
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
            {sponsors.map((sponsor, index) => (
              <Box
                key={sponsor.id}
                display="flex"
                alignItems="baseline"
                justifyContent="space-between"
              >
                <Box mr={1}>{sponsor.assigned_to}</Box>
                {sponsor.claimed === 0 && (
                  <Button
                    component={LoadingButton}
                    loading={revoking && revokingIndex === index}
                    onClick={() => onRevoke(sponsor.assigned_to, index)}
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
