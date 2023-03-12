import * as React from "react";
import { useParams, Navigate } from "react-router-dom";

import Layout from "../../components/Layout";
import AppContext from "../../state/context";
import PaySuccess from "./PaySuccess";
import ManualDetails from "./ManualDetails";
import RelatedManuals from "./RelatedManuals";
import { Manual as ManualType, ManualPayInfo } from "../../types";

const Manual = () => {
  const {
    dispatch,
    state: { manuals, user, manualPayInfo },
  } = React.useContext(AppContext);

  const { id } = useParams();

  const handleUpdatePayInfo = (payInfo: ManualPayInfo) => {
    dispatch({ type: "SET_MANUAL_PAYMENT", payload: payInfo });
  };

  const handleUpdateManuals = (manuals: ManualType[]) => {
    dispatch({ type: "SET_MANUALS", payload: manuals });
  };

  const manual = manuals?.find((manual) => manual.id === Number(id));
  const relatedManuals = manuals?.filter((manual) => manual.id !== Number(id));

  if (!manual) return <Navigate to="/manuals" />;

  return (
    <Layout title="Manual Cover">
      {!manualPayInfo ? (
        <>
          <ManualDetails
            manual={manual}
            user={user}
            onUpdatePayInfo={handleUpdatePayInfo}
            onUpdateManuals={handleUpdateManuals}
          />
          <RelatedManuals relatedManuals={relatedManuals} />
        </>
      ) : (
        <PaySuccess
          payInfo={manualPayInfo}
          onUpdateManuals={handleUpdateManuals}
        />
      )}
    </Layout>
  );
};

export default Manual;
