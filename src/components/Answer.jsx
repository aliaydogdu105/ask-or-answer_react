import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActionArea, IconButton } from "@mui/material";

const Answer = ({ question, answer }) => {
  return (
    <div>
      <Card sx={{ width: "400px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {question}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {answer}
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Answer;
