import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { HighlightWithinTextarea } from "react-highlight-within-textarea";
import { makeStyles } from "@mui/styles";
import "./style.css";
import axios from "axios";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
  },
});

export default function Report() {
  let res = JSON.parse(localStorage.getItem("response"));
  let id = localStorage.getItem("id");
  let date = localStorage.getItem("date");
  let type = localStorage.getItem("type");
  const [report, setReport] = React.useState(res.report);
  const [highlight, setHighlight] = React.useState(res.highlight);
  const handleChange = (report) => setReport(report);
  const classes = useStyles();

  document.onmouseup = () => {
    let selection = window.getSelection().toString();
    if (selection.length > 1 && !highlight.includes(selection)) {
      setHighlight([...highlight, selection]);
    }
  };

  console.log(highlight);

  const handlePost = () => {
    axios
      .post("http://127.0.0.1:5000/api/patient/save_report", {
        id: id,
        date: date,
        type: type,
        report: report,
        highlight: highlight,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(highlight);

  if (highlight[0] === "") {
    return (
      <div style={{ width: "100%", height: 400 }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <div className="highlight_area">
            <HighlightWithinTextarea value={report} onChange={handleChange} />
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
      </div>
    );
  } else {
    return (
      <div style={{ width: "100%", height: 400 }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
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
      </div>
    );
  }
}
