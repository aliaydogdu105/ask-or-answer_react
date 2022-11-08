import React from "react";
import { Box, TextField } from "@mui/material";

const Question = ({ addQuestion, setAddQuestion, handleSubmit }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const ask = e.target.name;
    const value = e.target.value;
    // console.log(ask, value);
    setAddQuestion({ ...addQuestion, [ask]: value });
    // console.log(addQuestion);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <TextField
            id="outlined-basic"
            label="Ask your question"
            variant="outlined"
            name="question:"
            value={addQuestion.Question}
            onChange={handleChange}
            autoComplete="off"
            align="center"
            sx={{ width: "100%" }}
          />
        </Box>
      </form>
    </div>
  );
};

export default Question;
