import React from "react";
import TopBar from "../components/TopBar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import axios from 'axios'

const columns = [
	{ field: "id", headerName: "ID", flex: 1 },
	{ field: "name", headerName: "Name", flex: 1 },
	{ field: "age", headerName: "Age", flex: 1 },
	{ field: "sex", headerName: "Sex", flex: 1 },
];

export default function PatientsList() {
	
	const [row, setRow] = React.useState([]);
	const [selectedID, setSelectedID] = React.useState([]);

	React.useEffect(() => {
		axios.get('http://140.114.77.34:5000/api/get_patient_list')
			.then(res => {
				setRow(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	localStorage.setItem('id', selectedID)

	return (
		<div style={{ height: 400, width: "100%" }}>
			<TopBar />
			<br />
			<DataGrid 
				rows={row}
				columns={columns} 
				components={{ Toolbar: GridToolbar }}
				onSelectionModelChange={(ids) => {
					const selectedIds = new Set(ids);
					const selectedRow = row.filter((row) => selectedIds.has(row.id));
					setSelectedID(selectedRow[0].id);
				}}
			/>
			<br />
			<div style={{ display: "flex", justifyContent: "right" }}>
				<Button
					variant="contained"
					color="primary"
					endIcon={<SendIcon />}
					href="/personal"
					onClick={() => {
						axios.get('http://140.114.77.34:5000/api/get_patient?id=' + selectedID)
							.then(res => {
								localStorage.setItem('patient', JSON.stringify(res.data))
							})
							.catch(err => {
								console.log(err)
							}
						)
					}}
				>
					Select
				</Button>
			</div>
		</div>
	);
}


export const Home_Page = (PatientsList)