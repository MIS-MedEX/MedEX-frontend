import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useCanvas} from "./CanvasContext";


const options = ['origin', 'cardio', 'pleural', 'pneumo'];
var btnNum = 0

const handleButtonNum = (num) =>{
  btnNum = num
  console.log(btnNum)
}


// export default function ImageButtons(props) {

//     // const setSelectedBtn = props.setSelectedBtn;
//     // const selectedBtn = props.selectedBtn;

//     return (
//       <ButtonGroup  aria-label="outlined primary button group" disableRipple>
//         <Button onClick={()=>setSelectedBtn(1)} variant={selectedBtn === 1 ? "contained" : "outlined"}>{options[0]}</Button>
//         <Button onClick={()=>setSelectedBtn(2)} variant={selectedBtn === 2 ? "contained" : "outlined"}>{options[1]}</Button>
//         <Button onClick={()=>setSelectedBtn(3)} variant={selectedBtn === 3 ? "contained" : "outlined"}>{options[2]}</Button>
//         <Button onClick={()=>setSelectedBtn(4)} variant={selectedBtn === 4 ? "contained" : "outlined"}>{options[3]}</Button>
//       </ButtonGroup>
//     );
//   }

export const OriginButton = (props) => {
  const { change_img_via_modebtn } = useCanvas()
  return (
    <Button onClick={()=>{change_img_via_modebtn("origin"); props.btnOnChange(1); console.log(props.btnNums)}} variant={props.btnNums === 1 ? "contained" : "outlined"}>Default</Button>
  )
}

export const CardioButton = (props) => {
  const { change_img_via_modebtn } = useCanvas()
  return (
    <Button onClick={()=>{change_img_via_modebtn("cardio");props.btnOnChange(2); console.log(props.btnNums)}} variant={props.btnNums === 2 ? "contained" : "outlined"}>Cardio</Button>
  )
}

export const PleuralButton = (props) => {
  const { change_img_via_modebtn } = useCanvas()
  return (
    <Button onClick={()=>{change_img_via_modebtn("pleural");props.btnOnChange(3); console.log(props.btnNums)}} variant={props.btnNums === 3 ? "contained" : "outlined"}>Pleural</Button>
  )
}

export const PneumoButton = (props) => {
  const { change_img_via_modebtn } = useCanvas()
  return (
    <Button onClick={()=>{change_img_via_modebtn("pneumo");props.btnOnChange(4); console.log(props.btnNums)}} variant={props.btnNums === 4 ? "contained" : "outlined"}>Pneumo</Button>
  )
}