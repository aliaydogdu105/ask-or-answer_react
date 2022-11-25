import { Button, Fab } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button onClick={scrollToTop} aria-label="scroll back to top">
      <Fab
        sx={{
          border: "5px solid #732D2D ",
          opacity: "50%",
          position: "fixed",
          bottom: "25vh",
          borderRadius: "50%",
          right: "10px",
          fontSize: "1px",
          zIndex: "1",
          cursor: "pointer",
          display: visible ? "inline" : "none",
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Button>
  );
};

export default BackToTop;
