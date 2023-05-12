import * as React from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import SponsorDialog from "./SponsorDialog";
import RecipientsDialog from "./RecipientsDialog";
import ClaimDialog from "./ClaimDialog";
import toastExpectedError from "../../utils/toastExpectedError";
import {
  sponsorManual,
  claimManual,
  getAllManuals,
  getUnPaidManuals,
  getRecipients,
  revokeManual,
  getUserManual,
} from "../../services/manualsService";
import useNetworkInfo from "../../hooks/useNetworkInfo";
import { Manual, Recipients } from "../../types";

type SponsorAndClaimManualProps = {
  manual: Manual;
  onUpdateManuals: (manuals: Manual[]) => void;
};

const SponsorAndClaimManual = (props: SponsorAndClaimManualProps) => {
  const { manual, onUpdateManuals } = props;

  const isOnline = useNetworkInfo();

  const [email, setEmail] = React.useState("");
  const [numOfCopies, setNumOfCopies] = React.useState(0);
  const [sponsorDialogOpen, setSponsorDialogOpen] = React.useState(false);
  const [sponsorSuccess, setSponsorSuccess] = React.useState(false);
  const [sponsorIsSubmitting, setSponsorIsSubmitting] = React.useState(false);
  const [userManualLoading, setUserManualLoading] = React.useState(false);

  const [recipients, setRecipients] = React.useState<Recipients[]>([]);
  const [revoking, setRevoking] = React.useState(false);
  const [revokingIndex, setRevokingIndex] = React.useState(-1);
  const [gettingRecipients, setGettingRecipients] = React.useState(false);
  const [recipientsDialogOpen, setRecipientsDialogOpen] = React.useState(false);

  const [claimIsSubmitting, setClaimIsSubmitting] = React.useState(false);
  const [claimDialogOpen, setClaimDialogOpen] = React.useState(false);

  const handleOpenSponsorDialog = async () => {
    try {
      setUserManualLoading(true);
      const { data } = await getUserManual(manual.id);

      setNumOfCopies(data.copy);
      setSponsorDialogOpen(true);
    } catch (ex) {}
    setUserManualLoading(false);
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

  const handleCloseRecipientsDialog = () => {
    setRecipientsDialogOpen(false);
  };

  const handleGetRecipients = async () => {
    try {
      setGettingRecipients(true);
      const { data } = await getRecipients(manual.id);

      setRecipients(data);
      setRecipientsDialogOpen(true);
    } catch (ex) {}
    setGettingRecipients(false);
  };

  const handleRevoke = async (email: string, index: number) => {
    try {
      setRevoking(true);
      setRevokingIndex(index);

      await revokeManual(manual.id, { email });
      const { data } = await getRecipients(manual.id);

      setRecipients(data);
    } catch (ex) {}
    setRevoking(false);
    setRevokingIndex(-1);
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
        <>
          <Button
            disabled={!isOnline}
            onClick={handleOpenSponsorDialog}
            loading={userManualLoading}
            component={LoadingButton}
          >
            Sponsor People
          </Button>
          <Button
            disabled={!isOnline}
            onClick={handleGetRecipients}
            loading={gettingRecipients}
            component={LoadingButton}
          >
            View Recipients
          </Button>
        </>
      ) : (
        <>
          {!manual?.paid && !manual?.is_free && manual?.sponsored && (
            <Button
              disabled={!isOnline}
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
        numOfCopies={numOfCopies}
        open={sponsorDialogOpen}
        onSponsor={handleSponsor}
        isSubmitting={sponsorIsSubmitting}
        isSuccess={sponsorSuccess}
        onOpen={handleOpenSponsorDialog}
        onClose={handleCloseSponsorDialog}
        onEmailChange={handleSponsorEmailChange}
      />

      <RecipientsDialog
        recipients={recipients}
        manual={manual}
        revoking={revoking}
        revokingIndex={revokingIndex}
        onRevoke={handleRevoke}
        open={recipientsDialogOpen}
        onClose={handleCloseRecipientsDialog}
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
