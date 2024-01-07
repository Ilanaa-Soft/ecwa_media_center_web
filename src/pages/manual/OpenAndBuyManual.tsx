import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PayDialog from "./PayDialog";
import useNetworkInfo from "../../hooks/useNetworkInfo";
import currencyFormtter from "../../utils/currencyFormatter";
import { User, Manual, ManualPayInfo } from "../../types";
import { Account } from "../../types/payment";

type OpenAndBuyManualProps = {
  user: User;
  manual: Manual;
  onUpdatePayInfo: (payInfo: ManualPayInfo) => void;
};

const OpenAndBuyManual = (props: OpenAndBuyManualProps) => {
  const { user, manual, onUpdatePayInfo } = props;

  const isOnline = useNetworkInfo();
  const [isPayDialogOpen, setIsPayDialogOpen] = React.useState(false);
  const [numberOfCopies, setCopies] = React.useState("");
  const [payMethod, setPayMethod] = React.useState("");
  const [hasPayMethod, setHasPayMethod] = React.useState(false);
  const [hasMobileNumber, setHasMobileNumber] = React.useState(true);
  const [account, setAccount] = React.useState<Account | null>(null);
  const [accountLoading, setAccountLoading] = React.useState(false);
  const [balanceLoading, setBalanceLoading] = React.useState(false);
  const [lowBalance, setLowBalance] = React.useState(false);

  const price = 800;
  const navigate = useNavigate();

  const handleOpenManual = (id: number) => {
    navigate(`/manual-topics/${id}`);
  };

  const handleOpenPayDialog = () => {
    setIsPayDialogOpen(true);
  };

  const handleClosePayDialog = () => {
    setCopies("");
    setPayMethod("");
    setHasPayMethod(false);
    setHasMobileNumber(true);
    setAccount(null);
    setLowBalance(false);
    setAccountLoading(false);
    setBalanceLoading(false);
    setIsPayDialogOpen(false);
  };

  const handleHasPayMethod = (value: boolean) => {
    setHasPayMethod(value);
  };

  const handleCopiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCopies(event.target.value);
  };

  const handlePayMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPayMethod(event.target.value);
  };

  const handleHasMobileNumber = (value: boolean) => {
    setHasMobileNumber(value);
  };

  const handleAccountChange = (account: Account) => {
    setAccount(account);
  };

  const handleAccountLoading = (value: boolean) => {
    setAccountLoading(value);
  };

  const handleBalanceLoading = (value: boolean) => {
    setBalanceLoading(value);
  };

  const handleLowBalance = (value: boolean) => {
    setLowBalance(value);
  };

  return (
    <>
      {manual?.paid || manual?.is_free ? (
        <Button onClick={() => handleOpenManual(manual.id)}>Open Manual</Button>
      ) : (
        <>
          {!manual?.paid && !manual?.is_free && !manual?.sponsored && (
            <Box mr={2} display="inline-block">
              <Typography mb={2} fontWeight="500">
                {currencyFormtter(price)}
              </Typography>
              <Button disabled={!isOnline} onClick={handleOpenPayDialog}>
                Buy Manual
              </Button>
            </Box>
          )}
        </>
      )}

      <PayDialog
        user={user}
        manual={manual}
        hasMobileNumber={hasMobileNumber}
        hasPayMethod={hasPayMethod}
        open={isPayDialogOpen}
        paymentMethod={payMethod}
        numberOfCopies={numberOfCopies}
        account={account}
        lowBalance={lowBalance}
        accountLoading={accountLoading}
        balanceLoading={balanceLoading}
        onOpen={handleOpenPayDialog}
        onClose={handleClosePayDialog}
        onHasPayMethod={handleHasPayMethod}
        onHasMobileNumber={handleHasMobileNumber}
        onAccountChange={handleAccountChange}
        onLowBalance={handleLowBalance}
        onAccountLoading={handleAccountLoading}
        onBalanceLoading={handleBalanceLoading}
        onUpdatePayInfo={onUpdatePayInfo}
        onCopiesChange={handleCopiesChange}
        onPayMethodChange={handlePayMethodChange}
        amount={price * Number(numberOfCopies)}
      />
    </>
  );
};

export default OpenAndBuyManual;
