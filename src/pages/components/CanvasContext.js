import React, { useContext, useEffect, useRef, useState } from "react";
import Test from "./test.jpg";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [activateDrawing, setActivateDrawing] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false)
  const [size, setSize] = useState(500)
  const [x_loc, setXloc] = useState(250)
  const [y_loc, setYloc] = useState(100)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const img = new Image();
  const add_scale = 10;
  const MAX_ZOOM = 900;
  const MIN_ZOOM = 300;

  // const isDragging = false;
  // var MAX_ZOOM = 5;
  // var MIN_ZOOM = 0.1;
  // var SCROLL_SENSITIVITY = 0.0005;
  // var cameraZoom = 1;
  // var lastZoom = cameraZoom;

  

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    img.src = Test;
    canvas.width = window.innerWidth*2;
    canvas.height = window.innerHeight*2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext("2d");
    
    img.onload = function() {
        context.drawImage(img, 250, 100, 500, 500);
        
    } 
    
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "yellow";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const activateDraw = () => {
    setActivateDrawing(!activateDrawing);
  }

  const startDrawing = ({ nativeEvent }) => {
    if (!activateDrawing) return;
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
        context.drawImage(img, x_loc, y_loc, size, size);
        
    } 
    img.src = Test;
  }

  const zoomIn = () => {
    if (size > MAX_ZOOM) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    
    img.onload = ()=> {
      context.drawImage(img, x_loc-add_scale, y_loc-add_scale, size+add_scale*2, size+add_scale*2);
      setXloc(prev=>prev-add_scale);
      setYloc(prev=>prev-add_scale);
      setSize(prev=>prev+add_scale*2);
      console.log(size);
    } 
    img.src = Test;
    console.log("zoom in");
    
  }

  const zoomOut = () => {
    if (size < MIN_ZOOM) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    img.onload = function() {
      context.drawImage(img, x_loc+add_scale, y_loc+add_scale, size-add_scale*2, size-add_scale*2);
      setXloc(prev=>prev+add_scale);
      setYloc(prev=>prev+add_scale);
      setSize(prev=>prev-add_scale*2);
      console.log(size);
    } 
    img.src = Test;
    console.log("zoom out");
    
  }

    
  // const adjustZoom = (zoomAmount, zoomFactor) =>
  // {
  //   if (!isDragging)
  //   {
  //       if (zoomAmount)
  //       {
  //           cameraZoom += zoomAmount
  //       }
  //       else if (zoomFactor)
  //       {
  //           console.log(zoomFactor)
  //           cameraZoom = zoomFactor*lastZoom
  //       }
        
  //       cameraZoom = Math.min( cameraZoom, MAX_ZOOM )
  //       cameraZoom = Math.max( cameraZoom, MIN_ZOOM )
        
  //       console.log(zoomAmount)
  //   }
  // }

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   canvas.addEventListener( 'wheel', (e) => adjustZoom(e.deltaY*SCROLL_SENSITIVITY))
  // })

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
        zoomOut,
        activateDraw,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);



