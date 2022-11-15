import React, {Component} from "react";
import CanvasDraw from "react-canvas-draw";
import Test from "./test.jpg";
import IconButton from '@mui/material/IconButton';


class Canvas extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <button onClick={() => {
                    this.saveableCanvas.eraseAll();}}>
                    Erase
                </button>
                <CanvasDraw
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    canvasWidth={1000}
                    canvasHeight={500}
                    brushRadius={1}
                    disabled={this.props.open}
                    brushColor={"#FFFF00"}
                    catenaryColor={"#FFFF00"}
                    imgSrc={Test}
                    hideGridX={true}
                    enablePanAndZoom={true}
                />
            </div>
        )
    }
}

export default Canvas;