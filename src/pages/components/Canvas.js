import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";

export function Canvas(props) {
  const { canvasRef, prepareCanvas, startDrawing, finishDrawing, draw } =
    useCanvas();

  useEffect(() => {
    prepareCanvas(props.canvasOpen);
  }, [props.canvasOpen]);

  return (
    <React.Fragment>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </React.Fragment>
  );
}
