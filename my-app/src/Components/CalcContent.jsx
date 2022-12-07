import styled from "@emotion/styled";
import { Container, Divider, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: white;
    height: 70px;
    color: gray;
  }
`;

export default function CalcContent() {
  const [input, setInput] = useState("hi");
  const calcButtons = [
    "C",
    "(",
    ")",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "00",
    "=",
  ];

  const setInputField = (character) => {
    const new_input = input + character;
    setInput(new_input);
  };

  return (
    <Container
      sx={{
        width: "90%",
        height: "90%",
        padding: "70px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          height: "70px",
          borderRadius: 1,
          border: "1px solid lightgray",
          lineHeight: "70px",
          textAlign: "center",
        }}
      >
        {input}
      </Box>
      {/* <StyledTextField
        id="inputField"
        disabled
        fullWidth
        margin="normal"
        value={input}
      ></StyledTextField> */}

      <Divider sx={{ margin: "30px" }} />
      <Grid container spacing={2}>
        {calcButtons.map((btn) => (
          <Grid item xs={3}>
            <Box
              sx={{
                height: "50px",
                backgroundColor: "white",
                textAlign: "center",
                borderRadius: 10,
                lineHeight: "50px",
              }}
            >
              {btn}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
