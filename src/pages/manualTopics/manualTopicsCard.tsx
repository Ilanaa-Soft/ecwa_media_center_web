import { CardContent, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ManualTopic } from "../../types";

type ManualTopicsCardProps = {
  topic: ManualTopic;
};

const ManualTopicsCard = ({ topic }: ManualTopicsCardProps) => {
  const navigate = useNavigate();

  const handleClick = (topic: ManualTopic) => {
    navigate(`/manual-topic`, { state: topic });
  };

  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow:
          "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
      }}
      onClick={() => handleClick(topic)}
    >
      <CardContent>
        <Typography mb={1} fontSize="20px" fontWeight="500" component="h3">
          Lesson {topic.number}
        </Typography>
        <Typography fontSize="18px" mb={1} fontWeight="500" component="h4">
          {topic.topic}
        </Typography>
        <Typography>{topic.aim}</Typography>
      </CardContent>
    </Card>
  );
};
export default ManualTopicsCard;
