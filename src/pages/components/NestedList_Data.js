import React, { useEffect, useState }  from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// icon
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

import axios from 'axios';


export default function NestedList_Data(props){

  const [PID, setPID] = useState(1)
  const [date, setDate] = useState([])
  const [date_time, setDateTime] = useState({})
  const [opens, setOpens] = useState({})



  useEffect(() => {

    // console.log(props.number)


    const content = JSON.parse(localStorage.getItem('patient'))
    const patient_id = JSON.parse(localStorage.getItem('id'))

    setPID(patient_id)


    // get patient date data and parse to nestedlist format
    const items = content.date;
    var _date = Object.keys(items)
    setDate([...date, ..._date])

    var datas_key_len = Object.keys(items).length
    var date_time_tmp = {}
    var open_tmp = {}

    for(var i = 0 ; i < datas_key_len ; i++)
    {
      date_time_tmp[_date[i]] = items[_date[i]]
      open_tmp[_date[i]] = false
    }

    setDateTime({...date_time, ...date_time_tmp})
    setOpens({...opens, ...open_tmp})

  }, [])

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
      {
        date?.map((item)=>
        <div>
          <ListItemButton onClick={()=> {var updateValue = {[item]: !opens[item]}; setOpens(tmp => ({...tmp, ...updateValue}));}}>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItemButton>

          <Collapse in={opens[item]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {
              date_time[item]?.map((items)=>
              <ListItemButton sx={{ pl: 11 }}>   
                <ListItemText primary={items} 
                              onClick={()=>
                                axios.get('http://127.0.0.1:5000/api/patient/' + PID + '/image?date=' + [item] + '&type=' + [items])
                                  .then(res => {
                                    // const reg = /^.*[\\\/]/
                                    const reg = 'C:/medex-backend/db/'

                                    var origin_path = (res.data.img_org_path).replaceAll('\\', '/').replace(reg, '')

                                    var cardio_path = (res.data.res_our_cardio.vis_path).replaceAll('\\', '/').replace(reg, '')
                                    var pleural_path = (res.data.res_our_pleural.vis_path).replaceAll('\\', '/').replace(reg, '')
                                    var pneumo_path = (res.data.res_our_pneumo.vis_path).replaceAll('\\', '/').replace(reg, '')
                                  
                                    console.log(origin_path)  // imgs/F_C_1576_2.jpg
                                    console.log(cardio_path)
                                    console.log(pleural_path)
                                    console.log(pneumo_path)

                                    props.imgOnChange(origin_path, cardio_path, pleural_path, pneumo_path)
                                    
                                    
                                  })
                                  .catch(err => {
                                    console.log(err)
                                  }
                                )
                              }/>
                <CheckCircleTwoToneIcon/>
              </ListItemButton>
              )
            }
          </List>
          </Collapse> 
        </div>
        
        )
      }
    </List>
  );
}


export const DataList = (NestedList_Data)