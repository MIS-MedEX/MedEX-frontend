import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea'
import { makeStyles } from "@mui/styles";
import "./style.css";

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

export default function Report() {
	const [value, setValue] = React.useState("");
	const [highlight, setHighlight] = React.useState([]);

    const handleChange = (value) => setValue(value);

	document.onmouseup = () => {
		let selection = window.getSelection().toString();
		if (selection.length > 0 && !highlight.includes(selection)) {
			setHighlight(highlight.concat(selection));
		}
	}

	console.log(highlight);

	const example = {
		"report": "this is a cardio.",
		"highlight": ["cardio"]
	}

	const handleResponse = (response) => {
		setValue(response.report);
		setHighlight(response.highlight);
	}

	React.useEffect(() => {
		handleResponse(example);
		// axios.get('http://')
		// .then(res => {
		// 	handleResponse(res.data)
		// })
		// .catch(err => {
		// 	console.log(err)
		// })
	}, [])

	const classes = useStyles();

    return (
		<Stack spacing={2} sx={{ width: '100%', height: '100%' }}>
			<div className="highlight_area">
				<HighlightWithinTextarea
					value={value}
					highlight={highlight}
					onChange= {handleChange}
				/>
			</div>
			<Button 
				className={classes.button}
				variant="contained" 
				fullWidth={true} 
				onClick={() => console.log(value)}
			>
				Submit
			</Button>
		</Stack>
    );
	
}