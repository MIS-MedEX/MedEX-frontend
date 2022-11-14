import React, {Component} from "react";
import CanvasDraw from "react-canvas-draw";

class Canvas extends Component{
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
                    canvasHeight={800}
                    brushRadius={1}
                    brushColor={"#FFFF00"}
                    catenaryColor={"#FFFF00"}
                    imgSrc={""}
                    hideGridX={true}
                    enablePanAndZoom={true}
                />
            </div>
        )
    }
}

export default Canvas;