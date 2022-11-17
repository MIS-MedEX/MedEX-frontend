import React, { useEffect, useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import CreateIcon from '@mui/icons-material/Create';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import LightModeIcon from '@mui/icons-material/LightMode';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function ToolBar(props) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('patient'));
  //   console.log(items);
  //   setName(items.name);
  //   setAge(items.age);
  //   setSex(items.sex)

  //   // console.log(item.sex);
  //   // const basic_information = item.name + " (" + item.age + "y/" + items.sex + ")";
  // })
  

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {name} ({age}Y / {sex})
          </Typography>

          {/* <IconButton>
            <PanToolAltIcon/>
          </IconButton> */}
          <IconButton color={props.color}>
            <CreateIcon onClick={props.ClickOpen}/>
          </IconButton>
          <IconButton>
            <AutoFixNormalIcon onClick={props.ClickErase}/>
          </IconButton>
          {/* <IconButton>
            <ZoomInIcon/>
          </IconButton>
          <IconButton>
            <ZoomOutIcon/>
          </IconButton>
          <IconButton>
            <LightModeIcon/>
          </IconButton> */}
        </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}