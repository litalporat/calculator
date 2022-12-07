import styled from "@emotion/styled";
import React, { useContext } from "react";
import ColorContext from "../ColorContext";
import Calculator from "./Calculator";
import ColorPick from "./ColorPick";

const Container = styled.div`
  height: 100vh;
  justify-content: center;
`;

export default function Page() {
  const { colorBg } = useContext(ColorContext);
  return (
    <Container style={{ backgroundColor: colorBg }}>
      <ColorPick />
      <Calculator />
    </Container>
  );
}
