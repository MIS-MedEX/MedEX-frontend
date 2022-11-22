import React, { useContext, useRef, useState } from "react";
import Test from "./test.jpg";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const img = new Image();

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth*2;
    canvas.height = window.innerHeight*2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;


    const context = canvas.getContext("2d");
    img.onload = function() {
        context.drawImage(img, 0, 0, 700, 700);
        
    } 
    img.src = Test;
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "yellow";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
     
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    img.onload = function() {
        context.drawImage(img, 0, 0, 700, 700);
        
    } 
    img.src = Test;
  }

  const zoomIn = () => {
    const canvas = canvasRef.current;
    // canvas.width = img.width*2
    // canvas.height = img.height*2
    // const context = canvas.getContext("2d");
    // const pt = context.transformedPoint(lastX,lastY);
    // context.translate(pt.x,pt.y);
    // context.scale(2,2);
    // context.translate(-pt.x,-pt.y);
    // context.fillStyle = "white";
    // context.fillRect(0, 0, canvas.width, canvas.height);
    // img.onload = function() {
    //     context.drawImage(img, 0, 0, 256, 256, 0, 0, canvas.width, canvas.height);
    // } 
    // img.src = Test;
    
  }

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        zoomIn,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);