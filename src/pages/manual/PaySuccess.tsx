import * as React from "react";
import { Box } from "@mui/material";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import usePaySuccessApi from "../../hooks/usePaySuccessApi";
import { Manual, ManualPayInfo } from "../../types";

type PaySuccessProps = {
  payInfo: ManualPayInfo;
  onUpdateManuals: (manuals: Manual[]) => void;
};

const PaySuccess = ({ payInfo, onUpdateManuals }: PaySuccessProps) => {
  const isMountedRef = React.useRef(false);
  const { loading, error, request } = usePaySuccessApi(
    payInfo,
    onUpdateManuals
  );

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      request();
    }
  }, [request]);

  const handleTryAgain = () => request();

  return (
    <Box>
      {loading ? (
        <Loading text="Please wait while we update your payment info" />
      ) : (
        <>{error && <Error onTryAgain={handleTryAgain} />}</>
      )}
    </Box>
  );
};

export default PaySuccess;
