import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Link,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";

import DialogTransition from "../../components/DialogTransition";
import currencyFormtter from "../../utils/currencyFormatter";
import { createAccount, getWallet } from "../../services/paymentService";
import payMethods from "../../utils/paymethods";
import { User, Manual, ManualPayInfo } from "../../types";
import { Account } from "../../types/payment";

type PayDialogProps = {
  user: User;
  open: boolean;
  manual: Manual;
  amount: number;
  accountLoading: boolean;
  balanceLoading: boolean;
  account: Account | null;
  lowBalance: boolean;
  hasPayMethod: boolean;
  hasMobileNumber: boolean;
  numberOfCopies: string;
  paymentMethod: string;
  onOpen: () => void;
  onClose: () => void;
  onHasPayMethod: (value: boolean) => void;
  onHasMobileNumber: (value: boolean) => void;
  onAccount: (account: Account) => void;
  onAccountLoading: (value: boolean) => void;
  onBalanceLoading: (value: boolean) => void;
  onLowBalance: (value: boolean) => void;
  onUpdatePayInfo: (payInfo: ManualPayInfo) => void;
  onCopiesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPayMethodChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PayDialog = ({
  user,
  manual,
  open,
  account,
  lowBalance,
  accountLoading,
  balanceLoading,
  amount,
  paymentMethod,
  numberOfCopies,
  hasPayMethod,
  hasMobileNumber,
  onClose,
  onHasPayMethod,
  onHasMobileNumber,
  onAccount,
  onLowBalance,
  onAccountLoading,
  onBalanceLoading,
  onCopiesChange,
  onUpdatePayInfo,
  onPayMethodChange,
}: PayDialogProps) => {
  const paystackConfig = {
    email: user?.email || "",
    amount: amount * 100,
    publicKey: `${process.env.REACT_APP_PAYSTACK_PK_KEY}`,
    reference: `ref-${Math.ceil(Math.random() * 10e13)}`,
  };

  const initializePaystackPayment = usePaystackPayment(paystackConfig);

  const handlePaySuccess = (reference: any) => {
    const payInfo = {
      amount,
      manual_id: manual.id,
      copy: Number(numberOfCopies),
      reference: reference.reference,
    };

    onClose();
    onUpdatePayInfo(payInfo);
  };

  const handleProceedToMethod = () => {
    if (!Number(numberOfCopies)) return;
    onHasPayMethod(true);
  };

  const handleProceedToPayment = () => {
    if (!paymentMethod) return;

    if (paymentMethod === "transfer") handleGetAccount();
    else initializePaystackPayment(handlePaySuccess);
  };

  const handleGetAccount = async () => {
    if (user.app_user.mobile) {
      onAccountLoading(true);

      try {
        const { data } = await createAccount();
        onAccount(data);
      } catch (ex) {}

      onAccountLoading(true);
    } else {
      onHasMobileNumber(false);
    }
  };

  const handleGetAccountBalance = async () => {
    onBalanceLoading(true);
    try {
      const { data } = await getWallet();

      if (data.balance >= amount) {
        const reference = {
          reference: `ref-${Math.ceil(Math.random() * 10e13)}`,
        };
        handlePaySuccess(reference);
      } else {
        onLowBalance(true);
      }
    } catch (ex) {}
    onBalanceLoading(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={DialogTransition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
        {`${manual?.year} ${manual?.language} ${manual?.name}`}
      </DialogTitle>
      <DialogContent>
        {account && !lowBalance ? (
          <>
            <Box>Bank Name: {account.bank}</Box>
            <Box>Account Number: {account.account_number}</Box>
            <Box>Account Name: {account.account_name}</Box>

            <Typography mt={1} id="alert-dialog-slide-description">
              Transfer {currencyFormtter(amount)} to the account above and click
              the proceed button. Kindly note that it may take up to five
              minutes before your transfer is processed
            </Typography>
          </>
        ) : (
          <>
            {lowBalance ? (
              <>
                <Typography id="alert-dialog-slide-description">
                  The balance in your assigned account is currently not enough
                  to charge {currencyFormtter(amount)}. If you have successfully
                  made the tranfer, please try again by clicking the proceed
                  button. If the problem persist kindly reach out to us on{" "}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:ecwamediacenter@gmail.com"
                  >
                    ecwamediacenter@gmail.com
                  </Link>
                </Typography>
              </>
            ) : (
              <>
                {!hasMobileNumber ? (
                  <Typography id="alert-dialog-slide-description">
                    You currently cannot use transfer payment method because you
                    don't have a mobile number on your profile. Kindly update
                    your{" "}
                    <Link component={RouterLink} to="/profile">
                      profile
                    </Link>{" "}
                    by adding your number to use this payment method
                  </Typography>
                ) : (
                  <>
                    <Typography id="alert-dialog-slide-description">
                      Buy the manual for your family and friends or sponsor
                      people who would love to have the manual on the app by
                      buying many copies
                    </Typography>

                    <Box my={0.5} textAlign="center">
                      {currencyFormtter(amount)}
                    </Box>

                    {hasPayMethod && numberOfCopies ? (
                      <TextField
                        select
                        fullWidth
                        size="small"
                        name="paymentMethod"
                        id="select-payment-method"
                        defaultValue=""
                        variant="filled"
                        value={paymentMethod}
                        onChange={onPayMethodChange}
                        label="Select payment method"
                      >
                        {payMethods.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    ) : (
                      <TextField
                        autoFocus
                        fullWidth
                        size="small"
                        name="numOfCopies"
                        id="number-of-copies"
                        type="number"
                        variant="filled"
                        inputMode="numeric"
                        inputProps={{ min: 0 }}
                        value={numberOfCopies}
                        onChange={onCopiesChange}
                        label="How many copies would you like to buy?"
                      />
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        {account ? (
          <>
            <Button
              component={LoadingButton}
              loading={balanceLoading}
              onClick={handleGetAccountBalance}
            >
              Proceed
            </Button>
          </>
        ) : (
          <>
            {hasMobileNumber && (
              <Button
                component={LoadingButton}
                loading={accountLoading}
                onClick={
                  hasPayMethod && numberOfCopies
                    ? handleProceedToPayment
                    : handleProceedToMethod
                }
              >
                Proceed
              </Button>
            )}
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default PayDialog;
