import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";

function parseResponse(response) {
  let data = [];
  for (let key in response) {
    if (key.includes("res_our_")) {
      let name = key.split("_")[2];
      let probability = response[key].prob;
      let base = response["res_baseline_" + name].prob;
      if (name === "cardio") {
        name = "Cardiomegaly";
      }
      if (name === "pneumo") {
        name = "Pneumonia";
      }
      if (name === "pleural") {
        name = "Pleural Effusion";
      }
      data.push({ name, probability, base });
    }
  }
  return data;
}

export default function AIResult() {
  let res = JSON.parse(localStorage.getItem("response"));
  let data = parseResponse(res);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          width={450}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Type of Disease" offset={0} position="bottom" />
          </XAxis>
          <YAxis
            label={{ value: "Probability", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Bar
            barSize={50}
            dataKey="probability"
            fill="#8884d8"
            label={{ fontSize: 15, position: "top", fill: "#8884d8" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
