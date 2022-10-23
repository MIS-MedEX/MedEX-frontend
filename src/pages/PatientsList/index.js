import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import TopBar from "../components/TopBar";
import { DataGrid } from "@mui/x-data-grid";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import list from "./data.json";

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "name", headerName: "Name", width: 130 },
	{ field: "age", headerName: "Age", width: 130 },
	{ field: "sex", headerName: "Sex", width: 130 },
	{ field: "birth", headerName: "Birth", width: 130 },
];

const rows = list;



export default function PatientsList() {
	const [search, setSearch] = useState("");
	const [data, setData] = useState(rows);
	const requestSearch = (searchedVal) => {
		const filteredRows = rows.filter((row) => {
			return row.name.toLowerCase().includes(searchedVal.toLowerCase());
		});
		setData(filteredRows);
	};
	
	const cancelSearch = () => {
		setSearch("");
		requestSearch(search);
	};

	return (
		<div style={{ height: 400, width: "100%" }}>
			<TopBar />
			<br />
			<SearchBar
				value={search}
				onChange={(newValue) => setSearch(newValue)}
				onCancelSearch={() => cancelSearch()} 
			/>
			<br />
			<DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
			<br />
			<div style={{ display: "flex", justifyContent: "right" }}>
				<Button
					variant="contained"
					color="primary"
					endIcon={<SendIcon />}
					href="/personal"
				>
					Select
				</Button>
			</div>
		</div>
	);
}