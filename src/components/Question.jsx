import React from "react";
import { Box, AppBar, Typography, TextField } from "@mui/material";

const Question = () => {
  return (
    <div>
      {/* Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          align="center"
          position="fixed"
          sx={{ backgroundColor: "black" }}
        >
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: "40px", padding: "9px" }}
          >
            Ask or Answer
          </Typography>
        </AppBar>
      </Box>
      {/* Navbar/ */}
      <h1 align="center">Question</h1>

      <form>
        <Box
          textAlign="center"
          verticalAlign="middle"
          direction="column"
          bgcolor="white"
          style={{
            margin: "auto",
            width: "60%",
            border: "10px solid black",
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
