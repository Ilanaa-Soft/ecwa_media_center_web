import * as React from "react";
import { Button } from "@mui/material";

import SponsorDialog from "./SponsorDialog";
import toastExpectedError from "../../utils/toastExpectedError";
import { sponsorManual } from "../../services/ManualsService";

type SponsorAndClaimManualProps = {
  manual: Manual;
};

const SponsorAndClaimManual = ({ manual }: SponsorAndClaimManualProps) => {
  const [email, setEmail] = React.useState("");
  const [sponsorSuccess, setSponsorSuccess] = React.useState(false);
  const [sponsorIsSubmitting, setSponsorIsSubmitting] = React.useState(false);
  const [sponsorDialogOpen, setSponsorDialogOpen] = React.useState(false);

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

  return (
    <>
      {manual?.paid && !manual?.is_free && !manual?.sponsored ? (
        <Button onClick={handleOpenSponsorDialog}>Sponsor People</Button>
      ) : (
        <>
          {!manual?.paid && !manual?.is_free && <Button>Claim Manual</Button>}
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
    </>
  );
};

export default SponsorAndClaimManual;
