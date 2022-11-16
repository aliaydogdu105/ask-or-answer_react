import React from "react";
import { Box, Button, TextField } from "@mui/material";

const Question = ({ addQuestion, setAddQuestion, handleSubmit }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    setAddQuestion({ ...addQuestion, [name]: value });
    // console.log(addQuestion);
  };

  return (
    <div>
      <Box
        textAlign="center"
        direction="column"
        bgcolor="#F7F7F7"
        sx={{
          padding: "8px",
          margin: "auto",
          width: "60%",
          border: "1.5px solid yellow",
          borderRadius: "5px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Ask your question"
            variant="outlined"
            name="question"
            value={addQuestion.question}
            onChange={handleChange}
            autoComplete="off"
            align="center"
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Ask your answer"
            variant="outlined"
            name="answer"
            value={addQuestion.answer}
            onChange={handleChange}
            autoComplete="off"
            align="center"
            sx={{ width: "10%" }}
          />
          <Button variant="contained" type="submit" value="Submit">
            Send
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Question;
