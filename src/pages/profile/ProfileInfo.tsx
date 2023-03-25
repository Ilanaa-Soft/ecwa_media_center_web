import { Box, Typography, IconButton } from "@mui/material";
import { EditRounded } from "@mui/icons-material";

import defaultUser from "../../assets/user.jpg";
import { User } from "../../types";

type ProfileInfoProps = {
  user: User;
  onEdit: () => void;
};

const ProfileInfo = ({ user, onEdit }: ProfileInfoProps) => {
  return (
    <Box
      mt={3}
      p="16px"
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
      borderRadius="20px"
      position="relative"
    >
      <Box my={4} textAlign="center" flexDirection="column" alignItems="center">
        <Box position="absolute" top="16px" right="16px">
          <IconButton onClick={onEdit}>
            <EditRounded sx={{ fontSize: "30px" }} />
          </IconButton>
        </Box>
        <Box
          component="img"
          width="120px"
          height="120px"
          src={defaultUser}
          alt="profile image"
        />
        <Typography
          mt="4px"
          fontSize="20px"
          fontWeight="700"
          textAlign="center"
          lineHeight="1.2"
        >
          {user?.name}
        </Typography>
        <Typography textAlign="center" fontSize="18px" fontWeight="500">
          {user?.email}
        </Typography>
      </Box>

      <Box
        gap={3}
        display="grid"
        sx={{
          gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
        }}
      >
        <Box>
          <Typography fontWeight="500">Full Name:</Typography>
          <Typography>{user?.name}</Typography>
        </Box>
        <Box>
          <Typography fontWeight="500">Email:</Typography>
          <Typography>{user?.email}</Typography>
        </Box>
        <Box>
          <Typography fontWeight="500">Phone Number:</Typography>
          <Typography>{user?.app_user.mobile}</Typography>
        </Box>
        <Box>
          <Typography fontWeight="500">District:</Typography>
          <Typography>{user?.app_user.dcc}</Typography>
        </Box>
        <Box>
          <Typography fontWeight="500">Local Church Board:</Typography>
          <Typography>{user?.app_user.lcb}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
