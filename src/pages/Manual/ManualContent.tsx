import { Box, Typography } from "@mui/material";

import PayDialog from "./PayDialog";
import ManualCard from "./ManualCard";
import ManualDetails from "./ManualDetails";

type ManualContentProps = {
  user: User;
  price: number;
  manual: Manual;
  payMethod: string;
  numberOfCopies: string;
  relatedManuals: Manual[];
  isPayDialogOpen: boolean;
  handleOpenPayDialog: () => void;
  handleClosePayDialog: () => void;
  handleOpenManual: (id: number) => void;
  handleUpdatePayInfo: (payInfo: ManualPayInfo) => void;
  handleCopiesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePayMethodChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ManualContent = ({
  user,
  price,
  manual,
  payMethod,
  numberOfCopies,
  relatedManuals,
  isPayDialogOpen,
  handleOpenManual,
  handleOpenPayDialog,
  handleClosePayDialog,
  handleUpdatePayInfo,
  handleCopiesChange,
  handlePayMethodChange,
}: ManualContentProps) => {
  return (
    <>
      <ManualDetails
        price={price}
        manual={manual}
        onOpenManual={handleOpenManual}
        onOpenPayDialog={handleOpenPayDialog}
      />

      <Typography component="h2" fontWeight="600" my={2} fontSize="20px">
        Related Manuals
      </Typography>

      <Box
        gap={4}
        display="grid"
        sx={{
          gridTemplateColumns: {
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {relatedManuals.map((manual, i) => (
          <ManualCard
            manual={manual}
            key={manual.id}
            imgName={`banner${i + 1}`}
          />
        ))}
      </Box>
      <PayDialog
        user={user}
        manual={manual}
        open={isPayDialogOpen}
        paymentMethod={payMethod}
        numberOfCopies={numberOfCopies}
        onOpen={handleOpenPayDialog}
        onClose={handleClosePayDialog}
        onUpdatePayInfo={handleUpdatePayInfo}
        onCopiesChange={handleCopiesChange}
        onPayMethodChange={handlePayMethodChange}
        amount={price * Number(numberOfCopies)}
      />
    </>
  );
};

export default ManualContent;
