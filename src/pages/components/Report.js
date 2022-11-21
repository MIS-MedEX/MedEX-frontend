import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea'
import { makeStyles } from "@mui/styles";
import "./style.css";
import axios from 'axios'

const useStyles = makeStyles({
	button: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
});

// const example = {
// 	"report": "",
// 	"highlight": []
// }

export default function Report() {

	let res = JSON.parse(localStorage.getItem('response'))
	const [report, setReport] = React.useState(res.report);
	const [highlight, setHighlight] = React.useState(res.highlight);
    const handleChange = (report) => setReport(report);
	const classes = useStyles();

	
	document.onmouseup = () => {
		let selection = window.getSelection().toString();
		if (selection.length > 1 && !highlight.includes(selection)) {
			setHighlight([...highlight, selection]);
		}
	}

	// console.log(highlight)

	// post request to backend
	const handlePost = () => {
		axios.post('http://140.114.77.34:5000/api/patient/save_report', {
			"id": res.id,
			"date": res.date,
			"type": res.type,
			"report": report,
			"highlight": highlight
		})
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		})
	}


    return (
		<Stack spacing={2} sx={{ width: '100%', height: '100%' }}>
			<div className="highlight_area">
				<HighlightWithinTextarea
					value={report}
					highlight={highlight}
					onChange={handleChange}
				/>
			</div>
			<Button 
				className={classes.button}
				variant="contained" 
				fullWidth={true}
				onClick={handlePost}
			>
				Submit
			</Button>
		</Stack>
    );
	
}