import { createContext, useState } from "react";

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [colorBg, setColorBg] = useState("rgba(190,130,190,1)");
  const [colorLight, setColorLight] = useState("rgba(290,230,290,1)");

  const handleColor = (newColor) => {
    const strColor =
      "rgba(" +
      newColor.rgb.r +
      "," +
      newColor.rgb.g +
      "," +
      newColor.rgb.b +
      "," +
      newColor.rgb.a +
      ")";
    updateCalcColor(newColor);
    setColorBg(strColor);
  };

  const updateCalcColor = (newColor) => {
    const strColor =
      "rgba(" +
      (newColor.rgb.r + 100) +
      "," +
      (newColor.rgb.g + 100) +
      "," +
      (newColor.rgb.b + 100) +
      "," +
      newColor.rgb.a +
      ")";
    setColorLight(strColor);
  };

  return (
    <ColorContext.Provider value={{ colorBg, colorLight, handleColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorContext;
