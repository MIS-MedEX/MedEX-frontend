import React from "react";
import Button from "@mui/material/Button";
import { useCanvas } from "./CanvasContext";

export const OriginButton = (props) => {
  const { change_img_via_modebtn } = useCanvas();
  return (
    <Button
      onClick={() => {
        change_img_via_modebtn("origin");
        props.btnOnChange(1);
        console.log(props.btnNums);
      }}
      variant={props.btnNums === 1 ? "contained" : "outlined"}
    >
      Default
    </Button>
  );
};

export const CardioButton = (props) => {
  const { change_img_via_modebtn } = useCanvas();
  return (
    <Button
      onClick={() => {
        change_img_via_modebtn("cardio");
        props.btnOnChange(2);
        console.log(props.btnNums);
      }}
      variant={props.btnNums === 2 ? "contained" : "outlined"}
    >
      Cardio
    </Button>
  );
};

export const PleuralButton = (props) => {
  const { change_img_via_modebtn } = useCanvas();
  return (
    <Button
      onClick={() => {
        change_img_via_modebtn("pleural");
        props.btnOnChange(3);
        console.log(props.btnNums);
      }}
      variant={props.btnNums === 3 ? "contained" : "outlined"}
    >
      Pleural
    </Button>
  );
};

export const PneumoButton = (props) => {
  const { change_img_via_modebtn } = useCanvas();
  return (
    <Button
      onClick={() => {
        change_img_via_modebtn("pneumo");
        props.btnOnChange(4);
        console.log(props.btnNums);
      }}
      variant={props.btnNums === 4 ? "contained" : "outlined"}
    >
      Pneumo
    </Button>
  );
};
