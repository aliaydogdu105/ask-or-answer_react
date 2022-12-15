import * as React from "react";
import {
  TextField,
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  "@media (max-width:768px)": {
    width: 220,
  },
};

export default function AnswerInput({
  myAnswer,
  item,
  handleSubmit,
  addQuestion,
  handleChange,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    handleQues();
    return handleOpen;
  };
  const handleClose = () => setOpen(false);
  const handleQues = () => {
    myAnswer(item.id, item.answer, item.question);
  };

  return (
    <div>
      <Button
        sx={{
          mt: 2,
          color: "#323859",
          backgroundColor: "#85D982",
          height: 35,
          "&:hover": {
            color: "#85D982",
            backgroundColor: "#323859",
            scale: "1.05",
          },
        }}
        onClick={handleOpen}
      >
        Let's answer
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box textAlign="center" sx={style}>
            <form onSubmit={handleSubmit}>
              <Typography gutterBottom variant="h5" component="div">
                {item.question}???
              </Typography>
              <TextField
                id="outlined-basic"
                label="Write the answer"
                variant="outlined"
                name="answer"
                value={addQuestion.answer}
                onChange={handleChange}
                autoComplete="off"
                align="center"
                sx={{ width: "100%", marginY: 2 }}
              />
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                onClick={handleClose}
                disabled={!addQuestion.answer}
                sx={{
                  "&:hover": {
                    color: "#CCEA8D",
                    backgroundColor: "#01415B",
                    scale: "1.05",
                  },
                }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
