import { Typography } from "@mui/material";
import "./App.css";
import Answer from "./components/Answer";
import Question from "./components/Question";
import QuestionAnswerTwoTone from "@mui/icons-material/QuestionAnswerTwoTone";

let qa = [
  {
    id: "1",
    question: "question 1",
    answer: "answer 1",
  },
  {
    id: "2",
    question: "question 2",
    answer: "answer 2",
  },
  {
    id: "3",
    question: "question 3",
    answer: "answer 3",
  },
  {
    id: "4",
    question: "question 4",
    answer: "answer 4",
  },
];

function App() {
  return (
    <div className="App">
      <Typography
        variant="h4"
        fontFamily="papyrus"
        align="center"
        sx={{ margin: "10px" }}
      >
        <span>&#8799;</span>Question<span>&#8799;</span>
      </Typography>
      <Question />

      <Typography
        variant="h4"
        fontFamily="papyrus"
        align="center"
        sx={{ margin: "10px" }}
      >
        Answer
        <span>
          <QuestionAnswerTwoTone />
        </span>
      </Typography>
      <div>
        {qa.map(function ({ question, answer }) {
          return <Answer question={question} answer={answer} />;
        })}
      </div>
    </div>
  );
}

export default App;
