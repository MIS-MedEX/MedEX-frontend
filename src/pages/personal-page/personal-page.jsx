import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TopBar from "../components/TopBar";
import DataList from "../components/NestedList_Data";
import ToolBar from "../components/ToolBar";
import ReportAIResult from "../components/ReportAIResult";
import { Canvas } from "../components/Canvas";
import { CanvasProvider } from "../components/CanvasContext";
import {
  OriginButton,
  CardioButton,
  PleuralButton,
  PneumoButton,
} from "../components/ImageButtons";
import { ButtonGroup } from "@mui/material";

export default function Personal_Page() {
  const [btnNum, setBtnNum] = useState(0);
  const [canvasOpen, setCanvasOpen] = useState(0);

  const handleImage = () => {
    setCanvasOpen(canvasOpen + 1);
    setBtnNum(1);
  };

  const handleButtonNum = (num) => {
    setBtnNum(num);
  };

  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <TopBar />
          <Grid container>
            <Grid item xs={2}>
              <DataList imgOnChange={handleImage} />
            </Grid>
            <Grid item xs={10}>
              <React.StrictMode>
                <CanvasProvider>
                  <Stack spacing={2}>
                    <ToolBar />
                    <Grid container>
                      <Grid item xs={8}>
                        <ButtonGroup>
                          <OriginButton
                            btnNums={btnNum}
                            btnOnChange={handleButtonNum}
                          />
                          <CardioButton
                            btnNums={btnNum}
                            btnOnChange={handleButtonNum}
                          />
                          <PleuralButton
                            btnNums={btnNum}
                            btnOnChange={handleButtonNum}
                          />
                          <PneumoButton
                            btnNums={btnNum}
                            btnOnChange={handleButtonNum}
                          />
                        </ButtonGroup>
                        <Canvas canvasOpen={canvasOpen} />
                      </Grid>
                      <Grid item xs={4}>
                        <ReportAIResult />
                      </Grid>
                    </Grid>
                  </Stack>
                </CanvasProvider>
              </React.StrictMode>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </React.Fragment>
  );
}

export const PersonalPage = Personal_Page;
