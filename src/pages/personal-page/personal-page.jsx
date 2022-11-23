import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import TopBar from "../components/TopBar";
import DataList from '../components/NestedList_Data';
import ToolBar from '../components/ToolBar';
import ReportAIResult from '../components/ReportAIResult';
import ImageCard from '../components/ImageCard';
import {Canvas} from '../components/Canvas';
import { SettingsOverscanRounded } from '@material-ui/icons';
import { CanvasProvider } from "../components/CanvasContext";
import {ClearCanvasButton, ZoomInButton, ZoomOutButton} from '../components/ClearButton';
import {OriginButton, CardioButton, PleuralButton, PneumoButton} from "../components/ImageButtons"
import { ButtonGroup } from '@mui/material';


export default function PersonalPage() {
    
    const [erase, setErase] = React.useState(0)
    const [response, setResponse] = React.useState([])

    const [imgPath, setImgPath] = React.useState({})
    
    const [btnNum, setBtnNum] = React.useState(0)

    const handleImage = (origin_path, cardio_path, pleural_path, pneumo_path) => {
      var srcGroup = {}
      srcGroup['origin'] = origin_path
      srcGroup['cardio'] = cardio_path
      srcGroup['pleural'] = pleural_path
      srcGroup['pneumo'] = pneumo_path
      setImgPath(srcGroup)
      setBtnNum(1)
    }

    const handleButtonNum = (num) => {
      console.log("~~~~~~~~~~~~")
      setBtnNum(num)
    }
  
    

    const handleErase = ()  => { 
      setErase(()=>erase+1);
    }
 
    // let id = 2;
    // let date = "2020-08-11";
    // let type = "Xray-14:30:25";
    // // let id = 1
    // // let date = "2018-09-18";
    // // let type = "Xray-11:13:24";
    // useEffect(() => {
    //   axios.get('http://127.0.0.1:5000/api/patient/' + id + '/image?date=' + date + '&type=' + type)
    //   .then(res => {
    //     setResponse(res.data)
    //     console.log(res.data);
    //     localStorage.setItem('response', JSON.stringify(res.data));
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // }, [])
    
    return (
      <React.Fragment>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <TopBar/>
            <Grid container>
              <Grid item xs={2}>
                <DataList imgOnChange={handleImage}/>
              </Grid>
              <Grid item xs={10}>
                <React.StrictMode>
                <CanvasProvider>
                <Stack spacing={2}>
                <ToolBar />
                <Grid container>
                  <Grid item xs={8}>
                    {/* <Box display="flex" justifyContent="center" alignItems="center"> */}
                      <ButtonGroup>
                        <OriginButton 
                          btnNums={btnNum}
                          btnOnChange={handleButtonNum}/>
                        <CardioButton
                          btnNums={btnNum} 
                          btnOnChange={handleButtonNum}/>
                        <PleuralButton btnNums={btnNum} btnOnChange={handleButtonNum}/>
                        <PneumoButton btnNums={btnNum} btnOnChange={handleButtonNum}/>
                      </ButtonGroup>
                    {/* </Box> */}
                    <Canvas imgPaths={imgPath}/>
                  </Grid>
                  <Grid item xs={4}>
                    <ReportAIResult/>
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



export const Personal_Page = (PersonalPage)