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
            sx={{ maxWidth: 400, marginY: "20px", minHeight: 250 }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.question}???
                </Typography>

                <Button
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  onClick={() => myAnswer(item.id, item.answer, item.question)}
                >
                  Let's answer
                </Button>

                <Typography variant="body2" color="text.secondary">
                  <span>&#10547; </span>
                  {item.answer}
                </Typography>

                <Typography
                  variant="p"
                  component="div"
                  onClick={() => DeleteQuestion(item.id)}
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
