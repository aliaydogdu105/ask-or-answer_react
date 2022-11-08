import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActionArea } from "@mui/material";

const Answer = () => {
  return (
    <div>
      <Card sx={{ width: "400px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Soru
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cevap
            </Typography>
          </CardContent>
          <FavoriteIcon />
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Answer;
