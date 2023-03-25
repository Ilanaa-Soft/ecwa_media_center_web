import * as React from "react";

import { updateStorageManuals } from "../auth/storage";
import { savePayment } from "../services/manualsService";
import { getAllManuals, getUnPaidManuals } from "../services/manualsService";
import { Manual, ManualPayInfo } from "../types";

type UpdateManuals = (manuals: Manual[]) => void;

const usePaySuccessApi = (
  payInfo: ManualPayInfo,
  updateManuals: UpdateManuals
) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const request = async () => {
    setLoading(true);
    setError(false);
    try {
      await savePayment(payInfo);
      const { data: allManuals } = await getAllManuals();
      const { data: unPaidManuals } = await getUnPaidManuals();

      const manuals = [...allManuals, ...unPaidManuals];
      updateStorageManuals(manuals)
      updateManuals(manuals);
    } catch (ex) {
      setError(true);
    }
    setLoading(false);
  };

  return { loading, error, request };
};

export default usePaySuccessApi;
