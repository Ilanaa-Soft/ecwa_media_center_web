import * as React from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import SponsorDialog from "./SponsorDialog";
import ClaimDialog from "./ClaimDialog";
import toastExpectedError from "../../utils/toastExpectedError";
import {
  sponsorManual,
  claimManual,
  getAllManuals,
  getUnPaidManuals,
} from "../../services/ManualsService";
import { Manual } from "../../types";

type SponsorAndClaimManualProps = {
  manual: Manual;
  onUpdateManuals: (manuals: Manual[]) => void;
};

const SponsorAndClaimManual = (props: SponsorAndClaimManualProps) => {
  const { manual, onUpdateManuals } = props;

  const [email, setEmail] = React.useState("");
  const [sponsorSuccess, setSponsorSuccess] = React.useState(false);
  const [sponsorIsSubmitting, setSponsorIsSubmitting] = React.useState(false);
  const [sponsorDialogOpen, setSponsorDialogOpen] = React.useState(false);
  const [claimIsSubmitting, setClaimIsSubmitting] = React.useState(false);
  const [claimDialogOpen, setClaimDialogOpen] = React.useState(false);

  const handleOpenSponsorDialog = () => {
    setSponsorDialogOpen(true);
  };

  const handleCloseSponsorDialog = () => {
    setEmail("");
    setSponsorSuccess(false);
    setSponsorDialogOpen(false);
  };

  const handleSponsorEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleSponsor = async () => {
    setSponsorIsSubmitting(true);
    try {
      const request = { emails: [email] };
      await sponsorManual(request, manual.id);

      setSponsorSuccess(true);
    } catch (ex) {
      toastExpectedError(ex);
    }
    setSponsorIsSubmitting(false);
  };

  const handleCloseClaimDialog = () => {
    setClaimDialogOpen(false);
  };

  const handleClaim = async () => {
    setClaimIsSubmitting(true);
    try {
      await claimManual(manual.id);
      const { data: allManuals } = await getAllManuals();
      const { data: unPaidManuals } = await getUnPaidManuals();

      setClaimDialogOpen(true);
      onUpdateManuals([...allManuals, ...unPaidManuals]);
    } catch (ex) {
      toastExpectedError(ex);
    }
    setClaimIsSubmitting(false);
  };

  return (
    <>
      {manual?.paid && !manual?.is_free && !manual?.sponsored ? (
        <Button onClick={handleOpenSponsorDialog}>Sponsor People</Button>
      ) : (
        <>
          {!manual?.paid && !manual?.is_free && manual?.sponsored && (
            <Button
              onClick={handleClaim}
              loading={claimIsSubmitting}
              component={LoadingButton}
            >
              Claim Manual
            </Button>
          )}
        </>
      )}
      <SponsorDialog
        email={email}
        manual={manual}
        open={sponsorDialogOpen}
        onSponsor={handleSponsor}
        isSubmitting={sponsorIsSubmitting}
        isSuccess={sponsorSuccess}
        onOpen={handleOpenSponsorDialog}
        onClose={handleCloseSponsorDialog}
        onEmailChange={handleSponsorEmailChange}
      />

      <ClaimDialog
        manual={manual}
        open={claimDialogOpen}
        onClose={handleCloseClaimDialog}
      />
    </>
  );
};

export default SponsorAndClaimManual;
