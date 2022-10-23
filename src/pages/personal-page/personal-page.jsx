import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';


class PersonalPage extends React.Component {

	constructor(props){
		super(props);
	}

    updateController(){
    }
    componentDidMount() {
        this.updateController()
    }

	render() {
		return (
			<React.Fragment>
				<Box sx={{ display: 'flex'}}>
					<AppBar>
						<Toolbar>
							<MenuIcon />
						</Toolbar>
					</AppBar>
				</Box>
				<Container>
					
				</Container>
			</React.Fragment>
		);
	}

}



export const Personal_Page = (PersonalPage)