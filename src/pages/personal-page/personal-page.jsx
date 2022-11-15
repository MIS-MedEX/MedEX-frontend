import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import TopBar from "../components/TopBar";
import DataList from '../components/NestedList_Data';
import ToolBar from '../components/ToolBar';
import ReportAIResult from '../components/ReportAIResult';
import ImageCard from '../components/ImageCard';
import Canvas from '../components/Canvas';

export default function PersonalPage() {
    const [open, setOpen] = React.useState(true);
    const [disabled, setDisabled] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
      setDisabled(!disabled);
    };


    // const [item, setItems] = useState([]);
    // useEffect(() => {
    //   const items = JSON.parse(localStorage.getItem('patient'));
    //   console.log(items);
    // })


  
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
                <Stack spacing={2}>
                <ToolBar ClickOpen={handleClick}/>
                <Grid container>
                  <Grid item xs={9}>
                    <Canvas open={open}/>
                  </Grid>
                  <Grid item xs={3}>
                    <ReportAIResult/>
                  </Grid>
                </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        {/* <TopBar/>
        <Container fixed>
          <DataList/>
        </Container> */}
      </React.Fragment>
    );
  }



export const Personal_Page = (PersonalPage)