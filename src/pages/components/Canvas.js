import React, {Component} from "react";
import CanvasDraw from "react-canvas-draw";
import Test from "./test.jpg";
import IconButton from '@mui/material/IconButton';


class Canvas extends Component{
    constructor(props){
        super(props);
    }


    
    render(){
        if(this.props.erase){
            this.saveableCanvas.eraseAll();
        }
        return(
            <div>
                <CanvasDraw
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    canvasWidth={800}
                    canvasHeight={400}
                    brushRadius={1}
                    disabled={this.props.open}
                    brushColor={"#FFFF00"}
                    catenaryColor={"#FFFF00"}
                    imgSrc={Test}
                    hideGridX={true}
                    enablePanAndZoom={false}
                />
            </div>
        )
    }
}

export default Canvas;
