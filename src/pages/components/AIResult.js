import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

// const example = {
//     "img_label": "str",
//     "img_org_path": "str",
//     "res_our_cardio":{
//         prob: 0.5,
//         path: "str"
//     },
//     "res_our_pneumo":{
//         prob: 0.3,
//         path: "str"
//     },
//     "res_our_pleural":{
//         prob: 0.2,
//         path: "str"
//     },
//     "res_baseline_cardio":{
//         prob: 0.4,
//     },
//     "res_baseline_pneumo":{
//         prob: 0.2,
//     },
//     "res_baseline_pleural":{
//         prob: 0.1,
//     },
// }

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
      data.push({name, probability, base});
    }
  }
  return data;
}

export default function AIResult() {
  
  let res = JSON.parse(localStorage.getItem('response'))
  let data = parseResponse(res);
  // let data = parseResponse(example);

  return (
    <BarChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 20
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name">
        <Label value="Type of Disease" offset={0} position="bottom" />
      </XAxis>
      <YAxis label={{ value: 'Probability', angle: -90, position: 'insideLeft' }}/>
      <Tooltip />
      <Bar barSize={50} dataKey="probability" fill="#8884d8" label={{ fontSize: 15, position: "top", fill: "#8884d8" }} />
    </BarChart>
  );
}