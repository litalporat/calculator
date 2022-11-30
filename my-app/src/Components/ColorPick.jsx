import React, { useContext, useState } from "react";
import { SketchPicker } from "react-color";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import ColorContext from "../ColorContext";

const Container = styled.div`
  position: absolute;
  margin: 10px 10px;
`;

export default function ColorPick() {
  const { colorBg, colorLight, handleColor } = useContext(ColorContext);
  const [popColors, setPopColors] = useState(false);

  const handleColorChange = (picker) => {
    handleColor(picker);
  };
  const handlePopColors = () => {
    setPopColors(!popColors);
  };

  return (
    <Container>
      <Button sx={{ color: colorLight }} onClick={handlePopColors}>
        Change Color
      </Button>
      {popColors && (
        <SketchPicker color={colorBg} onChangeComplete={handleColorChange} />
      )}
    </Container>
  );
}
