import { Box, Typography } from "@mui/material";

import SponsorAndClaim from "./SponsorAndClaimManual";
import OpenAndBuyManual from "./OpenAndBuyManual";

type ManualDetailsProps = {
  user: User;
  manual: Manual;
  onUpdatePayInfo: (payInfo: ManualPayInfo) => void;
};

const ManualDetails = ({
  manual,
  user,
  onUpdatePayInfo,
}: ManualDetailsProps) => {
  return (
    <>
      <Box
        gap={4}
        display="grid"
        sx={{ gridTemplateColumns: { md: "repeat(2, 1fr)" } }}
      >
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            alt="Ecwa Logo"
            width="100%"
            height="250px"
            borderRadius="4px"
            src={`/sundayschool/banner5.jpg`}
          />
        </Box>

        <Box>
          <Typography mb="4px" fontSize="24px" fontWeight="600" component="h2">
            {`${manual?.year} ${manual?.language} ${manual?.name}`}
          </Typography>
          <Typography my="4px" fontSize="18px" fontWeight="500" component="h4">
            Summary
          </Typography>
          <Typography fontSize="18px" mb={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nisi autem reiciendis dignissimos neque a, sunt modi quos tenetur
            beatae facere dolore quam obcaecati exercitationem totam voluptatem
            hic eius? Necessitatibus.
          </Typography>

          <OpenAndBuyManual
            user={user}
            manual={manual}
            onUpdatePayInfo={onUpdatePayInfo}
          />

          <SponsorAndClaim manual={manual} />
        </Box>
      </Box>
    </>
  );
};

export default ManualDetails;
