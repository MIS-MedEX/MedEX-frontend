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


export default function PersonalPage() {
    
    const [erase, setErase] = React.useState(0);
    const [response, setResponse] = React.useState([]);

  
    

    const handleErase = ()  => { 
      setErase(()=>erase+1);
    }
    // const handleEraseEnd = () => {
    //   console.log("Erase End");
    //   setErase(false);
    // }

    // const [item, setItems] = useState([]);
    // useEffect(() => {
    //   const items = JSON.parse(localStorage.getItem('patient'));
    //   console.log(items);
    // })
    
    // let id = localStorage.getItem('id');  
    let id = 2;
    let date = "2020-08-11";
    let type = "Xray-14:30:25";
    // let id = 1
    // let date = "2018-09-18";
    // let type = "Xray-11:13:24";
    useEffect(() => {
      axios.get('http://140.114.77.34:5000/api/patient/' + id + '/image?date=' + date + '&type=' + type)
      .then(res => {
        setResponse(res.data)
        console.log(res.data);
        localStorage.setItem('response', JSON.stringify(res.data));
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
    
    return (
      <React.Fragment>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <TopBar/>
            <Grid container>
              <Grid item xs={2}>
                <DataList/>
              </Grid>
              <Grid item xs={10}>
                <React.StrictMode>
                <CanvasProvider>
                <Stack spacing={2}>
                <ToolBar />
                <Grid container>
                  <Grid item xs={9}>
                    <Canvas />
                  </Grid>
                  <Grid item xs={3}>
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