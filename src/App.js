import { AppBar, Box, Typography } from "@mui/material";
import "./App.css";
import Answer from "./components/Answer";
import Question from "./components/Question";
import QuestionAnswerTwoTone from "@mui/icons-material/QuestionAnswerTwoTone";
import { useState } from "react";
import { AddQuestion } from "./utils/functions";

const initialQuestion = { question: "" };

function App() {
  const [addQuestion, setAddQuestion] = useState(initialQuestion);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(addQuestion);
    AddQuestion(addQuestion);
    setAddQuestion(initialQuestion);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          align="center"
          position="fixed"
          sx={{ backgroundColor: "black" }}
        >
          <Typography
            component="div"
            fontFamily="Papyrus"
            sx={{
              flexGrow: 1,
              fontSize: "3rem",
              padding: "9px",
              "@media (max-width:768px)": {
                fontSize: "2rem",
              },
              color: "#BFBFBF",
            }}
          >
            Ask or Answer
          </Typography>
        </AppBar>
      </Box>
      <Typography
        variant="h4"
        fontFamily="Papyrus"
        align="center"
        sx={{
          margin: " 0.5rem auto",
          padding: "5px",
          backgroundColor: "yellow",
          width: "fit-content",
          borderRadius: "15px",
        }}
      >
        <span>&#8799;</span>Question<span>&#8799;</span>
      </Typography>
      <Question
        addQuestion={addQuestion}
        setAddQuestion={setAddQuestion}
        handleSubmit={handleSubmit}
      />

      <Typography
        variant="h4"
        fontFamily="Papyrus"
        align="center"
        sx={{
          margin: " 0.5rem auto",
          padding: "5px",
          backgroundColor: "pink",
          width: "fit-content",
          borderRadius: "15px",
        }}
      >
        Answer
        <span>
          <QuestionAnswerTwoTone />
        </span>
      </Typography>
      <div>
        <Answer />
      </div>
    </div>
  );
}

export default App;
