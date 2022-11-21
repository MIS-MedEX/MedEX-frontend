import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from "@mui/styles";


const options = ['origin', 'cardio', 'pleural', 'pneumo'];


export default function ImageButtons(props) {

    const setSelectedBtn = props.setSelectedBtn;
    const selectedBtn = props.selectedBtn;

    return (
      <ButtonGroup  aria-label="outlined primary button group" disableRipple>
        <Button onClick={()=>setSelectedBtn(1)} variant={selectedBtn === 1 ? "contained" : "outlined"}>{options[0]}</Button>
        <Button onClick={()=>setSelectedBtn(2)} variant={selectedBtn === 2 ? "contained" : "outlined"}>{options[1]}</Button>
        <Button onClick={()=>setSelectedBtn(3)} variant={selectedBtn === 3 ? "contained" : "outlined"}>{options[2]}</Button>
        <Button onClick={()=>setSelectedBtn(4)} variant={selectedBtn === 4 ? "contained" : "outlined"}>{options[3]}</Button>
      </ButtonGroup>
    );
  }