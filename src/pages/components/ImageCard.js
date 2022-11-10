import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function ImageCard() {
  return (
  <ThemeProvider theme={darkTheme}>
    <Box
      sx={{
        p: 2,
        bgcolor: 'background.default',
        display: 'grid',
        gridTemplateColumns: { md: '1fr' },
        gap: 2,
        overflow: 'auto', 
        height: '100%',
        maxHeight: 550
      }}
    >
      {[0, 1, 2, 3, 4].map((elevation) => (
        <Item key={elevation} elevation={elevation}>
          {`elevation=${elevation}`}
        </Item>
      ))}
      <Item>

      </Item>
      <Item>

      </Item>
      <Item>

      </Item>
      <Item>

      </Item>
    </Box>
  </ThemeProvider>
  );
}
