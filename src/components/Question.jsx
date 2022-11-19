import React from "react";
import { Box, Button, TextField } from "@mui/material";

const Question = ({ addQuestion, handleSubmit, handleChange }) => {
  return (
    <div>
      <Box
        textAlign="center"
        direction="column"
        bgcolor="#F7F7F7"
        sx={{
          padding: "8px",
          margin: "auto",
          width: "70%",
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
            sx={{ width: "100%", marginBottom: "8px" }}
            required
          />
          <Button
            sx={{
              width: 100,
              marginX: 30,
              "&:hover": {
                color: "#CCEA8D",
                backgroundColor: "#01415B",
                scale: "1.05",
              },
            }}
            variant="contained"
            type="submit"
            value="Submit"
          >
            Send
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Question;
