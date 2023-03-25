import { CardContent, CardMedia, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Manual } from "../../types";

type ManualsCardProps = {
  manual: Manual;
};

const ManualsCard = ({ manual }: ManualsCardProps) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/manuals/${id}`);
  };

  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow:
          "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
      }}
      onClick={() => handleClick(manual.id)}
    >
      <CardMedia
        sx={{ height: 240 }}
        image={`/sundayschool/banner${manual.id}.jpg`}
      />
      <CardContent>
        <Typography fontSize="24px" mb="4px" fontWeight="600" component="h2">
          {`${manual.year} ${manual.language}`}
        </Typography>
        <Typography fontSize="18px" fontWeight="500" component="h3">
          {manual.name}
        </Typography>
        <Typography fontSize="18px">{manual.summary}</Typography>
      </CardContent>
    </Card>
  );
};

export default ManualsCard;
