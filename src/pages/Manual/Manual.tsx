import * as React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

import Layout from "../../components/Layout";
import AppContext from "../../state/context";
import PaySuccess from "./PaySuccess";
import ManualContent from "./ManualContent";

const Manual = () => {
  const {
    dispatch,
    state: { manuals, user, manualPayInfo },
  } = React.useContext(AppContext);
  const [price] = React.useState(400);
  const [numberOfCopies, setCopies] = React.useState("");
  const [payMethod, setMethod] = React.useState("");
  const [isPayDialogOpen, setIsPayDialogOpen] = React.useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleOpenManual = (id: number) => {
    navigate(`/manual-topics/${id}`);
  };

  const handleOpenPayDialog = () => {
    setIsPayDialogOpen(true);
  };

  const handleClosePayDialog = () => {
    setCopies("");
    setMethod("");
    setIsPayDialogOpen(false);
  };

  const handleCopiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCopies(event.target.value);
  };

  const handlePayMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMethod(event.target.value);
  };

  const handleUpdatePayInfo = (payInfo: ManualPayInfo) => {
    dispatch({ type: "SET_MANUAL_PAYMENT", payload: payInfo });
    handleClosePayDialog();
  };

  const handleUpdateManuals = (manuals: Manual[]) => {
    dispatch({ type: "SET_MANUALS", payload: manuals });
  };

  const manual = manuals?.find((manual) => manual.id === Number(id));
  const relatedManuals = manuals?.filter((manual) => manual.id !== Number(id));

  if (!manual) return <Navigate to="/manuals" />;

  return (
    <Layout>
      {!manualPayInfo ? (
        <ManualContent
          user={user}
          price={price}
          manual={manual}
          payMethod={payMethod}
          numberOfCopies={numberOfCopies}
          relatedManuals={relatedManuals}
          isPayDialogOpen={isPayDialogOpen}
          handleOpenManual={handleOpenManual}
          handleOpenPayDialog={handleOpenPayDialog}
          handleClosePayDialog={handleClosePayDialog}
          handleUpdatePayInfo={handleUpdatePayInfo}
          handleCopiesChange={handleCopiesChange}
          handlePayMethodChange={handlePayMethodChange}
        />
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
