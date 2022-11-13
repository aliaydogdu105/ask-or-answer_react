import React from "react";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useFetch } from "../utils/functions";
import AnswerInput from "./AnswerInput";

const Answer = () => {
  const { isLoading, inCard } = useFetch();
  // console.log(inCard);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      {isLoading ? (
        <Typography gutterBottom variant="h5" component="div">
          Loading
        </Typography>
      ) : inCard?.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          NO RESULT FOUND
        </Typography>
      ) : (
        inCard?.map((item, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 400, marginY: "20px", minHeight: 250 }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.question}
                </Typography>
                <AnswerInput />
                <Typography variant="body2" color="text.secondary">
                  answers
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      )}
    </div>
  );
};

export default Answer;
