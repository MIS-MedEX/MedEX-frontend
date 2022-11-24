import React from "react";
import { useCanvas } from "./CanvasContext";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import BrushIcon from "@mui/icons-material/Brush";

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return <AutoFixNormalIcon onClick={clearCanvas}>Erase</AutoFixNormalIcon>;
};

export const ZoomInButton = () => {
  const { zoomIn } = useCanvas();

  return <ZoomInIcon onClick={zoomIn}>Zoom In</ZoomInIcon>;
};

export const ZoomOutButton = () => {
  const { zoomOut } = useCanvas();

  return <ZoomOutIcon onClick={zoomOut}>Zoom Out</ZoomOutIcon>;
};

export const ActivateDrawongButton = () => {
  const { activateDraw } = useCanvas();

  return <BrushIcon onClick={activateDraw}>Draw</BrushIcon>;
};
