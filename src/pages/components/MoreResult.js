import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  Cell,
  ResponsiveContainer,
} from "recharts";

function parseResponse(response) {
  let data = [];
  for (let key in response) {
    if (key.includes("res_our_")) {
      let name = key.split("_")[2];
      let ours = response[key].error;
      let baseline = response["res_baseline_" + name].error;
      if (name === "cardio") {
        name = "Cardiomegaly";
      }
      if (name === "pneumo") {
        name = "Pneumonia";
      }
      if (name === "pleural") {
        name = "Pleural Effusion";
      }
      data.push({ name, ours, baseline });
    }
  }
  return data;
}

export default function MoreResult() {
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
            label={{ value: "Error", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend align="right" verticalAlign="top" />
          <Bar
            dataKey="ours"
            fill="#8884d8"
            label={{ fontSize: 15, position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === res.img_label ? "#8884d8" : "#ededed"}
              />
            ))}
          </Bar>
          <Bar
            dataKey="baseline"
            fill="#82ca9d"
            label={{ fontSize: 15, position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === res.img_label ? "#82ca9d" : "#ededed"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
