import * as React from "react";
import { Box } from "@mui/material";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { savePayment } from "../../services/ManualsService";
import { getAllManuals, getUnPaidManuals } from "../../services/ManualsService";

type PaySuccessProps = {
  payInfo: ManualPayInfo;
  onUpdateManuals: (manuals: Manual[]) => void;
};

const PaySuccess = ({ payInfo, onUpdateManuals }: PaySuccessProps) => {
  const [loading, setLoading] = React.useState(true);
  const [hasError, setError] = React.useState(false);

  React.useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    setError(false);
    try {
      await savePayment(payInfo);
      const { data: allManuals } = await getAllManuals();
      const { data: unPaidManuals } = await getUnPaidManuals();

      onUpdateManuals([...allManuals, ...unPaidManuals]);
    } catch (ex) {
      setError(true);
    }
    setLoading(false);
  };

  const handleTryAgain = () => {
    fetch();
  };

  return (
    <Box>
      {loading ? (
        <Loading text="Please wait while we update your payment info" />
      ) : (
        <>{hasError && <Error onTryAgain={handleTryAgain} />}</>
      )}
    </Box>
  );
};

export default PaySuccess;
