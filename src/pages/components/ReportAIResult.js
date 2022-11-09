import React from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AIResult from './AIResult';
import MoreResult from "./MoreResult";	

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

export default function ReportAIResult() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
				<Box>
					<AIResult />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
						Pred: Cardio
					</Typography>
				</Box>
      </TabPanel>
			<TabPanel value={value} index={2}>
				<Box>
					<MoreResult />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
						Pred: Cardio
					</Typography>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
						Ground Truth: Cardio
					</Typography>
				</Box>
			</TabPanel>
    </Box>
  );
}