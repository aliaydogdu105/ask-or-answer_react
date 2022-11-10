import { Box, TextField } from "@mui/material";
import React from "react";

const AnswerInput = () => {
  return (
    <div>
      <form style={{ backgroundColor: "red", width: "100%" }}>
        <Box
          textAlign="center"
          direction="column"
          bgcolor="#F7F5F7"
          sx={{
            padding: "8px",
            margin: "auto",
            width: "50%",
            border: "1.5px solid gray",
            borderRadius: "5px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Write your answer"
            variant="outlined"
            name="question"
            value=""
            onChange=""
            autoComplete="off"
            align="center"
            sx={{ width: "100%" }}
          />
        </Box>
      </form>
    </div>
  );
};

export default AnswerInput;
