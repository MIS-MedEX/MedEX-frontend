import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AIResult from './AIResult';
import MoreResult from "./MoreResult";
import Report from './Report';
import axios from 'axios'

const example = {
    "img_label": "cardio",
    "img_org_path": "str",
    "res_our_cardio":{
        error: 0.5,
        prob: 0.5,
        path: "str"
    },
    "res_our_pneumo":{
        error: 0.7,
        prob: 0.3,
        path: "str"
    },
    "res_our_pleural":{
        error: 0.8,
        prob: 0.2,
        path: "str"
    },
    "res_baseline_cardio":{
        error: 0.6,
        prob: 0.4,
    },
    "res_baseline_pneumo":{
        error: 0.8,
        prob: 0.2,
    },
    "res_baseline_pleural":{
        error: 0.9,
        prob: 0.1,
    },
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function parseResponse(response) {
  let data = [];
  for (let key in response) {
    if (key.includes("res_our_")) {
      let name = key.split("_")[2];
      let error = response[key].error;
      let base = response["res_baseline_" + name].error;
      data.push({name, error, base});
    }
  }
  return data;
}

let id = localStorage.getItem('id')

export default function ReportAIResult() {
  const [value, setValue] = React.useState(0);
  const [response, setResponse] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    axios.get('http://140.114.77.34:5000/api/patient/' + id + '/image')
    .then(res => {
      setResponse(res.data)
    })
    .catch(err => {
      console.log(err)
    })
	}, [])
  
  let data = parseResponse(example);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Report" {...a11yProps(0)} />
          <Tab label="AI Results" {...a11yProps(1)} />
					<Tab label="More Results" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <Report />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
				<Box>
					<AIResult />
					{/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
						Pred: Cardio
					</Typography> */}
				</Box>
      </TabPanel>
			<TabPanel value={value} index={2}>
				<Box>
					<MoreResult />
					{/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
						Pred: Cardio
					</Typography> */}
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
						Ground Truth: {example.img_label}
					</Typography>
				</Box>
			</TabPanel>
    </Box>
  );
}