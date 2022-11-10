import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


// React.useEffect(() => {
//     axios.get('http://140.114.77.34:5000/api/get_patient_list')
//         .then(res => {
//             setRow(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }, [])


export default function Report() {
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };

    return (
    <Box sx={{ width: '100%' }}>
        <TextField
            fullWidth
            id="outlined-multiline-static"
            label=""
            placeholder="Please enter your report here"
            multiline
            rows={25}
            value={value}
            onChange={handleChange}
        />
    </Box>
    );
}