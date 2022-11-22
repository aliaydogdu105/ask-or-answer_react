import { AppBar, Box, Typography } from "@mui/material";
import "./App.css";
import Answer from "./components/Answer";
import Question from "./components/Question";
import QuestionAnswerTwoTone from "@mui/icons-material/QuestionAnswerTwoTone";
import { useState } from "react";
import { AddQuestion, LastAnswer } from "./utils/functions";
import { ToastContainer } from "react-toastify";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const initialQuestion = { question: "", answer: "" };

function App() {
  const [addQuestion, setAddQuestion] = useState(initialQuestion);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(addQuestion);
    if (addQuestion.id) {
      LastAnswer(addQuestion);
    } else {
      AddQuestion(addQuestion);
    }
    // setAddQuestion(initialQuestion);
    setAddQuestion(initialQuestion);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    setAddQuestion({ ...addQuestion, [name]: value });
    // console.log(addQuestion);
  };

  const myAnswer = (id, answer, question) => {
    setAddQuestion({ id, answer, question });
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
          backgroundColor: "#F2CB05",
          width: 250,
          borderRadius: "15px",
        }}
      >
        <span>&#8799;</span>Question<span>&#8799;</span>
      </Typography>
      <Question
        addQuestion={addQuestion}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <Typography
        variant="h4"
        fontFamily="Papyrus"
        align="center"
        sx={{
          margin: " 0.5rem auto",
          padding: "5px",
          backgroundColor: "#91D7F2",
          width: 250,
          borderRadius: "15px",
        }}
      >
        Answer
        <span>
          <QuestionAnswerTwoTone />
        </span>
      </Typography>
      <div>
        <Answer
          myAnswer={myAnswer}
          handleSubmit={handleSubmit}
          addQuestion={addQuestion}
          handleChange={handleChange}
        />
      </div>
      <ToastContainer />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          align="center"
          position="fixed-bottom"
          sx={{ backgroundColor: "black" }}
        >
          <span>
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
          </span>
        </AppBar>
      </Box>
    </div>
  );
}

export default App;
