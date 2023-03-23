import { Box, Typography } from "@mui/material";

import Badge from "./Badge";
import Calendar from "../../components/Calendar";
import defaultUser from "../../assets/user.webp";
import { User, UserParticipation } from "../../types";

type ProfileProps = {
  user: User;
  progress: UserParticipation;
};

const Profile = ({ user, progress }: ProfileProps) => {
  return (
    <Box
      p={2}
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
      borderRadius="20px"
      sx={{
        gridColumn: { md: "span 4" },
        display: { xs: "none", md: "block" },
      }}
    >
      <Box>
        <Box component="img" width="120px" height="120px" src={defaultUser} />
        <Typography mt="4px" textAlign="center" lineHeight="1.2">
          {user?.name}
        </Typography>
        <Typography textAlign="center">{user?.email}</Typography>
      </Box>
      <Box
        my="12px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>
          You're on week {progress?.read_topics} of {progress?.current_week}
        </Typography>
        <Badge label={progress?.percentage} />
      </Box>
      <Calendar />
    </Box>
  );
};

export default Profile;
