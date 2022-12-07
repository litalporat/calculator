import React, { useContext } from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import ColorContext from "../ColorContext";
import CalcContent from "./CalcContent";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  align-items: center;
  padding: 20px;
`;

export default function Calculator() {
  const { colorLight } = useContext(ColorContext);
  return (
    <Container>
      <Box
        sx={{
          width: 600,
          height: 600,
          borderRadius: 10,
          backgroundColor: colorLight,
          border: "1px solid grey",
        }}
      >
        <CalcContent />
      </Box>
    </Container>
  );
}
