import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useFetch, DeleteQuestion } from "../utils/functions";
import AnswerInput from "./AnswerInput";

const Answer = ({ myAnswer, handleSubmit, addQuestion, handleChange }) => {
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
            sx={{
              width: 300,
              minHeight: 250,
              marginY: "20px",
              backgroundColor: "#F2F2F2",
            }}
          >
            <CardActionArea>
              <CardContent sx={{ height: 250, display: "grid" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ margin: "auto" }}
                >
                  {item.question}???
                </Typography>

                <AnswerInput
                  myAnswer={myAnswer}
                  item={item}
                  handleSubmit={handleSubmit}
                  addQuestion={addQuestion}
                  handleChange={handleChange}
                />

                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{
                    marginY: "auto",
                    border: "1px solid black",
                  }}
                >
                  <span>&#10547; </span>
                  {item.answer}
                </Typography>

                <Typography
                  variant="p"
                  component="div"
                  sx={{
                    marginY: "auto",
                  }}
                >
                  <DeleteForeverIcon onClick={() => DeleteQuestion(item.id)} />
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
