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
            fontFamily="papyrus"
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
      {/* Navbar/ */}

      <form>
        <Box
          textAlign="center"
          verticalAlign="middle"
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
