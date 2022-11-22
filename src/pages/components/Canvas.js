import React, {Component} from "react";
import CanvasDraw from "react-canvas-draw";
import Test1 from "C:/medex-backend/db/imgs/F_C_1576_2.jpg";
import Test2 from "C:/medex-backend/db/imgs/F_C_5803_3.jpg";
import Test3 from "C:/medex-backend/db/imgs/F_C_6122_1.jpg";
import Test4 from "C:/medex-backend/db/imgs/F_C_11725_1.jpg";
import IconButton from '@mui/material/IconButton';
import ImageButtons from "./ImageButtons";
import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";

const options = ['origin', 'cardio', 'pleural', 'pneumo'];


export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

// import React, {Component} from "react";
// import CanvasDraw from "react-canvas-draw";
// import Test from "./test.jpg";
// import IconButton from '@mui/material/IconButton';

class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedBtn: 1,
            imgSrc: Test1,
        }

        this.setSelectedBtn = this.setSelectedBtn.bind(this);
    }

    setSelectedBtn(num) {
        this.setState({selectedBtn: num});

        if(num === 1){
            this.setState({imgSrc: Test1});
        }
        else if(num === 2){
            this.setState({imgSrc: Test2});
        }
        else if(num === 3){
            this.setState({imgSrc: Test3});
        }
        else if(num === 4){
            this.setState({imgSrc: Test4});
        }
        
    }

    render(){
        if(this.props.erase){
            this.saveableCanvas.eraseAll();
        }
        return(
            <div>
                <ImageButtons
                    setSelectedBtn={this.setSelectedBtn}
                    selectedBtn={this.state.selectedBtn}
                />
                <CanvasDraw
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    canvasWidth={800}
                    canvasHeight={600}
                    brushRadius={1}
                    disabled={this.props.open}
                    brushColor={"#FFFF00"}
                    catenaryColor={"#FFFF00"}
                    imgSrc={this.state.imgSrc}
                    hideGridX={true}
                    enablePanAndZoom={false}
                />
            </div>
        )
    }
}

// export default Canvas;