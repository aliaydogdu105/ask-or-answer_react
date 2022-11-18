import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useFetch, DeleteQuestion } from "../utils/functions";

const Answer = ({ myAnswer }) => {
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
              width: 400,
              minHeight: 250,
              marginY: "20px",
            }}
          >
            <CardActionArea>
              <CardContent sx={{ height: 300, display: "grid", gap: "2" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ margin: "auto" }}
                >
                  {item.question}???
                </Typography>

                <Button
                  id="modal-modal-description"
                  sx={{ mt: 2, bgcolor: "lightgray", height: 50 }}
                  onClick={() => myAnswer(item.id, item.answer, item.question)}
                >
                  Let's answer
                </Button>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    marginY: "auto",
                  }}
                >
                  <span>&#10547; </span>
                  {item.answer}
                </Typography>

                <Typography
                  variant="p"
                  component="div"
                  onClick={() => DeleteQuestion(item.id)}
                  sx={{
                    marginY: "auto",
                  }}
                >
                  <DeleteForeverIcon />
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
