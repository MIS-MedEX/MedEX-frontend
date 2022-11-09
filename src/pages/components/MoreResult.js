import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const response = {
    "img_label": "str",
    "img_org_path": "str",
    "res_our_cardio":{
        error: 0.5,
        prob: 0.5,
        path: "str"
    },
    "res_our_pneumo":{
        error: 0.7,
        prob: 0.3,
        path: "str"
    },
    "res_our_pleural":{
        error: 0.8,
        prob: 0.2,
        path: "str"
    },
    "res_baseline_cardio":{
        error: 0.6,
        prob: 0.4,
    },
    "res_baseline_pneumo":{
        error: 0.8,
        prob: 0.2,
    },
    "res_baseline_pleural":{
        error: 0.9,
        prob: 0.1,
    },
}

function parseResponse(response) {
  let data = [];
  for (let key in response) {
    if (key.includes("res_our_")) {
      let name = key.split("_")[2];
      let error = response[key].error;
      let base = response["res_baseline_" + name].error;
      data.push({name, error, base});
    }
  }
  return data;
}

let data = parseResponse(response);

export default function MoreResult() {
  return (
    <BarChart
      width={300}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: -20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend align="right" verticalAlign="top"/>
      <Bar dataKey="error" fill="#8884d8" label={{ fill: 'white', fontSize: 15 }} />
      <Bar dataKey="base" fill="#82ca9d" label={{ fill: 'white', fontSize: 15 }} />
    </BarChart>
  );
}