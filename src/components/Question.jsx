import React from "react";
import { Box, TextField } from "@mui/material";

const Question = ({ addQuestion, setAddQuestion }) => {
  return (
    <div>
      <form>
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
