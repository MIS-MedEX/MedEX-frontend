import React, { useEffect, useState }  from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';


// icon
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import TuneIcon from '@mui/icons-material/Tune';

export default function NestedList_Data(){
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const handleClick = () => { setOpen(!open); };
  const handleClick2 = () => { setOpen2(!open2); };


  var dateDict = [];


  const [date, setDate] = useState([]);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('patient'));
  //   setDate(items.date);
  //   console.log(items.date);

  //   // for(let i = 0; i < date.length ; i++)
  //   // {
  //   //   var _str = date[i].split(' ');
      
  //   //   console.log(_str);
  //   // }

  // }, [])

  return(
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >
      
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <FolderSharedIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
      />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="tune">
        <TuneIcon />
      </IconButton>

      <Divider light />


      <ListItemButton>
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
        <ListItemText primary="2021-06-07" />
      </ListItemButton>



      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
        <ListItemText primary="2021-08-31" />
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 11 }}>   
            <ListItemText primary="CT-19:00:07" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>   
            <ListItemText primary="X-Ray-20:00:38" />
          </ListItemButton>
        </List>
      </Collapse>


      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
        <ListItemText primary="2021-09-02" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 11 }}>   
            <ListItemText primary="CT-19:00:07" />
            <CheckCircleTwoToneIcon/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 11 }}>   
            <ListItemText primary="X-Ray-20:00:38" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}


export const DataList = (NestedList_Data)