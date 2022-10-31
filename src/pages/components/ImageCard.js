// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import List from '@mui/material/List';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

// export default function ImageCard() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{maxHeight: 600, overflow: 'auto'}}>
//         <List>
//         The man ate an extravagant meal at a fancy restaurant. Ritzy! This classy sentence uses three of some of the most commonly used words: the, a, and an. However, there is more to these words than simply the number of times that we use them. These three words belong to a class of words known as articles. If you want to become a grammar master, it is really important to know how to use articles because of how often they show up in our sentences.

//   What is an article?
//   An article is a word that is used to indicate that a noun is a noun without describing it. For example, in the sentence Nick bought a dog, the article a indicates that the word dog is a noun. Articles can also modify anything that acts as a noun, such as a pronoun or a noun phrase.

//   Often, a sentence needs an article before a noun in order to make grammatical sense. For example,
//   The man ate an extravagant meal at a fancy restaurant. Ritzy! This classy sentence uses three of some of the most commonly used words: the, a, and an. However, there is more to these words than simply the number of times that we use them. These three words belong to a class of words known as articles. If you want to become a grammar master, it is really important to know how to use articles because of how often they show up in our sentences.

//   What is an article?
//   An article is a word that is used to indicate that a noun is a noun without describing it. For example, in the sentence Nick bought a dog, the article a indicates that the word dog is a noun. Articles can also modify anything that acts as a noun, such as a pronoun or a noun phrase.

//   Often, a sentence needs an article before a noun in order to make grammatical sense. For example,
//   The man ate an extravagant meal at a fancy restaurant. Ritzy! This classy sentence uses three of some of the most commonly used words: the, a, and an. However, there is more to these words than simply the number of times that we use them. These three words belong to a class of words known as articles. If you want to become a grammar master, it is really important to know how to use articles because of how often they show up in our sentences.

//   What is an article?
//   An article is a word that is used to indicate that a noun is a noun without describing it. For example, in the sentence Nick bought a dog, the article a indicates that the word dog is a noun. Articles can also modify anything that acts as a noun, such as a pronoun or a noun phrase.

//   Often, a sentence needs an article before a noun in order to make grammatical sense. For example,
//         </List>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//   },
// ];



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
      {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 1, 2, 2, 4, 5, 6, 6, 1].map((elevation) => (
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
