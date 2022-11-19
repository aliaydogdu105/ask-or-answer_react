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
        <Typography variant="h4" marginTop="10vh" color="text.secondary">
          NO RESULT FOUND
        </Typography>
      ) : (
        inCard?.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 380,
              minHeight: 250,
              marginY: "20px",
              backgroundColor: "#F2F2F2",
              "@media (max-width:768px)": {
                width: 310,
              },
            }}
          >
            <CardActionArea>
              <CardContent sx={{ height: 250, display: "grid" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    margin: "auto",
                    width: "100%",
                    maxHeight: "100px",
                    overflow: "auto",
                    overflowWrap: "break-word",
                  }}
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
                    width: "maxWidth",
                    maxHeight: "100px",
                    overflow: "auto",
                    overflowWrap: "break-word",
                    padding: "3px",
                    bgcolor: "#EAF2CE",
                    borderRadius: "10px",
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
                  <DeleteForeverIcon
                    sx={{
                      transition: "transform ease-in-out 0.15s",
                      "&:hover": {
                        transform: "scale(2)",
                      },
                    }}
                    onClick={() => DeleteQuestion(item.id)}
                  />
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
