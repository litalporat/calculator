import { Container, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

export default function CalcContent() {
  const [input, setInput] = useState("");
  const [toReset, setToReset] = useState(false);
  const calcButtons = [
    "AC",
    "(",
    ")",
    "/",
    "7",
    "8",
    "9",
    "x",
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
    "←",
    "=",
  ];

  const inputCheck = (char) => {
    let new_input = input;
    const lastChar =
      new_input.length > 0 ? new_input[new_input.length - 1] : null;
    const operators = ["-", "+", "x", "/"];
    if (toReset === true) {
      setToReset(false);
      new_input = "";
    }
    if (operators.includes(char)) {
      if (operators.includes(lastChar)) new_input = new_input.slice(0, -1);
      if (input === "") char = "";
      if (lastChar === "(" && char !== "-") char = "";
    } else {
      if (lastChar === ")") char = "";
    }
    return new_input + char;
  };

  const setInputField = (e) => {
    if (e.currentTarget.id === "AC") setInput("");
    else if (e.currentTarget.id === "=") {
      setToReset(true);
      if (input !== "") setInput(calcFunc(input));
    } else if (e.currentTarget.id === "←") {
      const new_input = input.slice(0, -1);
      setInput(new_input);
    } else {
      setInput(inputCheck(e.currentTarget.id));
    }
  };

  const opPick = (split, op1, op2) => {
    const indexOp1 = split.indexOf(op1);
    const indexOp2 = split.indexOf(op2);
    if (indexOp1 > 0 && indexOp2 > 0) {
      if (indexOp1 < indexOp2) {
        return op1;
      } else {
        return op2;
      }
    } else if (indexOp1 > 0) return op1;
    else return op2;
  };

  const calcHelper = (split, operator) => {
    const index = split.indexOf(operator);
    let result;
    switch (operator) {
      case "x":
        result = parseFloat(split[index - 1]) * parseFloat(split[index + 1]);
        break;
      case "/":
        result = parseFloat(split[index - 1]) / parseFloat(split[index + 1]);
        break;
      case "-":
        result = parseFloat(split[index - 1]) - parseFloat(split[index + 1]);
        break;
      case "+":
        result = parseFloat(split[index - 1]) + parseFloat(split[index + 1]);
        break;
      default:
        break;
    }

    split.splice(index - 1, index + 2);
    split.splice(index - 1, 0, result);
  };

  const reformat = (expression) => {
    const tempExp = expression
      .replaceAll("()", "")
      .replaceAll("(-", "(0-")
      .replaceAll("-", ",-,")
      .replaceAll("+", ",+,")
      .replaceAll("x", ",x,")
      .replaceAll("/", ",/,")
      .replaceAll("(", ",(,")
      .replaceAll(")", ",),")
      .replaceAll(",,", ",");

    return tempExp.split(",");
  };

  const checkParentheses = (str) => {
    let parentheses = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") parentheses++;
      if (str[i] === ")") parentheses--;
    }
    if (parentheses === 0) return true;
    else return false;
  };

  const calcFunc = (str) => {
    if (checkParentheses(str) === false)
      return "Error! please check parentheses";
    const expression = str;
    const split = reformat(expression);

    if (split[0] === "") split.shift();
    if (split[split.length - 1] === "") split.pop();
    if (split.includes("(")) {
      const start_index = split.indexOf("(");
      const range = split.indexOf(")") - start_index;
      let new_str = "";
      for (let i = 1; i < range; i++) {
        new_str += split[start_index + i];
      }
      split.splice(start_index, range + 1);
      split.splice(start_index, 0, calcFunc(new_str));
    }
    while (split.includes("x") || split.includes("/")) {
      calcHelper(split, opPick(split, "x", "/"));
    }
    while (split.includes("+") || split.includes("-")) {
      calcHelper(split, opPick(split, "+", "-"));
    }

    return split[0];
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

      <Divider sx={{ margin: "30px" }} />
      <Grid container spacing={2}>
        {calcButtons.map((btn) => (
          <Grid item xs={3}>
            <Box
              id={btn}
              sx={{
                height: "50px",
                backgroundColor: "white",
                textAlign: "center",
                borderRadius: 10,
                lineHeight: "50px",
              }}
              onClick={setInputField}
            >
              {btn}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
