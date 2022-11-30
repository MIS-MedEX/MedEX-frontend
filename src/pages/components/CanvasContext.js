import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [activateDrawing, setActivateDrawing] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [size, setSize] = useState(500);
  const [x_loc, setXloc] = useState(0);
  const [y_loc, setYloc] = useState(0);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const img = new Image();
  const add_scale = 10;
  const MAX_ZOOM = 900;
  const MIN_ZOOM = 300;
  const [currentImg, setCurrentImg] = useState("");

  let data = JSON.parse(localStorage.getItem("response"));

  const prepareCanvas = (canvasOpen) => {
    const canvas = canvasRef.current;
    console.log(canvasOpen);
    if (canvasOpen > 0) {
      var _tmpsrc = "data:image/jpg;base64," + data.image_base64;
      img.src = _tmpsrc;
      setCurrentImg(_tmpsrc);
    }
    canvas.width = 400;
    canvas.height = 400;
    // canvas.style.width = `100%`;
    canvas.style.height = `100%`;
    canvas.style.display = "block";
    canvas.style.margin = "auto";
    const context = canvas.getContext("2d");

    img.onload = function () {
      context.drawImage(img, 0, 0, 200, 200);
    };

    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "yellow";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const activateDraw = () => {
    setActivateDrawing(!activateDrawing);
  };

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
    img.onload = function () {
      context.drawImage(img, 0, 0, 200, 200);
    };
    img.src = currentImg;
  };

  const zoomIn = () => {
    if (size > MAX_ZOOM) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    img.onload = () => {
      context.drawImage(
        img,
        x_loc - add_scale,
        y_loc - add_scale,
        size + add_scale * 2,
        size + add_scale * 2
      );
      setXloc((prev) => prev - add_scale);
      setYloc((prev) => prev - add_scale);
      setSize((prev) => prev + add_scale * 2);
      console.log(size);
    };
    img.src = currentImg;
    console.log("zoom in");
  };

  const zoomOut = () => {
    if (size < MIN_ZOOM) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    img.onload = function () {
      context.drawImage(
        img,
        x_loc + add_scale,
        y_loc + add_scale,
        size - add_scale * 2,
        size - add_scale * 2
      );
      setXloc((prev) => prev + add_scale);
      setYloc((prev) => prev + add_scale);
      setSize((prev) => prev - add_scale * 2);
      console.log(size);
    };
    img.src = currentImg;
    console.log("zoom out");
  };

  const change_img_via_modebtn = (mode) => {
    var _tmpsrc = "data:image/jpg;base64,";

    console.log(mode);

    if (mode === "origin") _tmpsrc = _tmpsrc + data.image_base64;
    if (mode === "cardio") _tmpsrc = _tmpsrc + data.res_our_cardio.vis_base64;
    if (mode === "pleural") _tmpsrc = _tmpsrc + data.res_our_pleural.vis_base64;
    if (mode === "pneumo") _tmpsrc = _tmpsrc + data.res_our_pneumo.vis_base64;

    setCurrentImg(_tmpsrc);
    img.src = _tmpsrc;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    img.onload = function () {
      context.drawImage(img, 0, 0, 200, 200);
    };
  };

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
        change_img_via_modebtn,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
