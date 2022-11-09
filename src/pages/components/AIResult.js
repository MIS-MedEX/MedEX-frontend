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
        prob: 0.5,
        path: "str"
    },
    "res_our_pneumo":{
        prob: 0.3,
        path: "str"
    },
    "res_our_pleural":{
        prob: 0.2,
        path: "str"
    },
    "res_baseline_cardio":{
        prob: 0.4,
    },
    "res_baseline_pneumo":{
        prob: 0.2,
    },
    "res_baseline_pleural":{
        prob: 0.1,
    },
}

function parseResponse(response) {
  let data = [];
  for (let key in response) {
    if (key.includes("res_our_")) {
      let name = key.split("_")[2];
      let prob = response[key].prob;
      let base = response["res_baseline_" + name].prob;
      data.push({name, prob, base});
    }
  }
  return data;
}

let data = parseResponse(response);

export default function AIResult() {
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
      <Bar dataKey="prob" fill="#8884d8" label={{ fill: 'white', fontSize: 15 }} />
    </BarChart>
  );
}