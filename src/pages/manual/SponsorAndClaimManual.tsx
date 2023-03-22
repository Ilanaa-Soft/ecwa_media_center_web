import * as React from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import SponsorDialog from "./SponsorDialog";
import ViewSponsorDialog from "./ViewSponsorDialog";
import ClaimDialog from "./ClaimDialog";
import toastExpectedError from "../../utils/toastExpectedError";
import {
  sponsorManual,
  claimManual,
  getAllManuals,
  getUnPaidManuals,
  getSponsors,
  revokeManual,
} from "../../services/manualsService";
import { Manual, Sponsors } from "../../types";

type SponsorAndClaimManualProps = {
  manual: Manual;
  onUpdateManuals: (manuals: Manual[]) => void;
};

const SponsorAndClaimManual = (props: SponsorAndClaimManualProps) => {
  const { manual, onUpdateManuals } = props;

  const [email, setEmail] = React.useState("");
  const [sponsors, setSponsors] = React.useState<Sponsors[]>([]);
  const [sponsorSuccess, setSponsorSuccess] = React.useState(false);
  const [gettingSponsors, setGettingSponsors] = React.useState(false);
  const [revoking, setRevoking] = React.useState(false);
  const [sponsorIsSubmitting, setSponsorIsSubmitting] = React.useState(false);
  const [sponsorDialogOpen, setSponsorDialogOpen] = React.useState(false);
  const [viewSponsorDialogOpen, setViewSponsorDialogOpen] = React.useState(
    false
  );
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

  const handleCloseViewSponsorDialog = () => {
    setViewSponsorDialogOpen(false);
  };

  const handleSponsorEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleSponsor = async () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) return;

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

  const handleGetSponsors = async () => {
    try {
      setGettingSponsors(true);
      const { data } = await getSponsors(manual.id);

      setSponsors(data);
      setViewSponsorDialogOpen(true);
    } catch (ex) {}
    setGettingSponsors(false);
  };

  const handleRevoke = async (email: string) => {
    try {
      setRevoking(true);
      const { data: revoke } = await revokeManual(manual.id, { email });
      const { data } = await getSponsors(manual.id);

      setSponsors(data);
    } catch (ex) {}
    setRevoking(false);
  };

  return (
    <>
      {manual?.paid && !manual?.is_free && !manual?.sponsored ? (
        <>
          <Button onClick={handleOpenSponsorDialog}>Sponsor People</Button>
          <Button
            onClick={handleGetSponsors}
            loading={gettingSponsors}
            component={LoadingButton}
          >
            View Sponsors
          </Button>
        </>
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

      <ViewSponsorDialog
        sponsors={sponsors}
        manual={manual}
        revoking={revoking}
        onRevoke={handleRevoke}
        open={viewSponsorDialogOpen}
        onClose={handleCloseViewSponsorDialog}
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
