import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PayDialog from "./PayDialog";
import currencyFormtter from "../../utils/currencyFormatter";

type OpenAndBuyManualProps = {
  user: User;
  manual: Manual;
  onUpdatePayInfo: (payInfo: ManualPayInfo) => void;
};

const OpenAndBuyManual = (props: OpenAndBuyManualProps) => {
  const { user, manual, onUpdatePayInfo } = props;
  
  const [numberOfCopies, setCopies] = React.useState("");
  const [payMethod, setpayMethod] = React.useState("");
  const [isPayDialogOpen, setIsPayDialogOpen] = React.useState(false);

  const price = 400;
  const navigate = useNavigate();

  const handleOpenManual = (id: number) => {
    navigate(`/manual-topics/${id}`);
  };

  const handleOpenPayDialog = () => {
    setIsPayDialogOpen(true);
  };

  const handleClosePayDialog = () => {
    setCopies("");
    setpayMethod("");
    setIsPayDialogOpen(false);
  };

  const handleCopiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCopies(event.target.value);
  };

  const handlePayMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpayMethod(event.target.value);
  };

  return (
    <>
      <Box mr={2} display="inline-block">
        {manual?.paid || manual?.is_free ? (
          <Button onClick={() => handleOpenManual(manual.id)}>
            Open Manual
          </Button>
        ) : (
          <>
            {!manual?.paid && !manual?.is_free && !manual?.sponsored && (
              <>
                <Typography mb={2} fontWeight="500">
                  {currencyFormtter(price)}
                </Typography>
                <Button onClick={handleOpenPayDialog}>Buy Manual</Button>
              </>
            )}
          </>
        )}
      </Box>

      <PayDialog
        user={user}
        manual={manual}
        open={isPayDialogOpen}
        paymentMethod={payMethod}
        numberOfCopies={numberOfCopies}
        onOpen={handleOpenPayDialog}
        onClose={handleClosePayDialog}
        onUpdatePayInfo={onUpdatePayInfo}
        onCopiesChange={handleCopiesChange}
        onPayMethodChange={handlePayMethodChange}
        amount={price * Number(numberOfCopies)}
      />
    </>
  );
};

export default OpenAndBuyManual;
