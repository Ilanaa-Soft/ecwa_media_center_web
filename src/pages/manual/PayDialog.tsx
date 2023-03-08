import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
} from "@mui/material";
import { usePaystackPayment } from "react-paystack";

import DialogTransition from "../../components/DialogTransition";
import currencyFormtter from "../../utils/currencyFormatter";
import payMethods from "../../utils/paymethods";
import { User, Manual, ManualPayInfo } from "../../types";

type PayDialogProps = {
  user: User;
  open: boolean;
  manual: Manual;
  amount: number;
  hasPayMethod: boolean;
  numberOfCopies: string;
  paymentMethod: string;
  onOpen: () => void;
  onClose: () => void;
  onHasPayMethod: (value: boolean) => void;
  onUpdatePayInfo: (payInfo: ManualPayInfo) => void;
  onCopiesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPayMethodChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PayDialog = ({
  user,
  manual,
  open,
  paymentMethod,
  amount,
  numberOfCopies,
  hasPayMethod,
  onClose,
  onHasPayMethod,
  onCopiesChange,
  onUpdatePayInfo,
  onPayMethodChange,
}: PayDialogProps) => {
  const config = {
    email: user?.email || "",
    amount: amount * 100,
    publicKey: `${process.env.REACT_APP_PAYSTACK_PK_KEY}`,
    reference: `ref-${Math.ceil(Math.random() * 10e13)}`,
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
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

    if (paymentMethod === "card") {
      initializePayment(onSuccess);
    }
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
        <DialogContentText id="alert-dialog-slide-description">
          Buy the manual for your family and friends or sponsor people who would
          love to have the manual on the app by buying many copies
        </DialogContentText>

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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button
          onClick={
            hasPayMethod && numberOfCopies
              ? handleProceedToPayment
              : handleProceedToMethod
          }
        >
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayDialog;
