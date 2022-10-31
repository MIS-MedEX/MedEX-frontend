import React from "react";
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

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        {/* <MenuIcon /> */}
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>

      <IconButton>
        <PanToolAltIcon/>
      </IconButton>
      <IconButton>
        <CreateIcon/>
      </IconButton>
      <IconButton>
        <AutoFixNormalIcon/>
      </IconButton>
      <IconButton>
        <ZoomInIcon/>
      </IconButton>
      <IconButton>
        <ZoomOutIcon/>
      </IconButton>
      <IconButton>
        <LightModeIcon/>
      </IconButton>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function ToolBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {appBarLabel('Tom Lin (53y/M)')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}