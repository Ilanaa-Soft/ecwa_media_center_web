import { CardContent, CardMedia, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Manual } from "../../types";

type ManualCardProps = {
  manual: Manual;
  imgName: string;
};

const ManualCard = ({ manual, imgName }: ManualCardProps) => {
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
      <CardMedia sx={{ height: 240 }} image={`/sundayschool/${imgName}.jpg`} />
      <CardContent>
        <Typography mb="4px" fontSize="20px" fontWeight="600" component="h3">
          {`${manual.year} ${manual.language}`}
        </Typography>
        <Typography fontSize="18px" fontWeight="500" component="h4">
          {manual.name}
        </Typography>
        <Typography fontSize="18px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          nisi autem reiciendis dignissimos neque a, sunt modi quos tenetur
          beatae facere dolore quam obcaecati exercitationem totam voluptatem
          hic eius? Necessitatibus.
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ManualCard;