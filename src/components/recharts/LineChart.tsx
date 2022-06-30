import React from "react";
import { LineChart, Line, XAxis, YAxis, Brush } from "recharts";

interface Data {
  x: number;
  y: number;
}

interface LineChartProps {
  height: number;
  width: number;
  data: Data[];
}

// date scales vs numerical? how to handle
const LineGraph = (props: LineChartProps) => {
  const { data } = props;
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="x" />
      <YAxis dataKey="y" />
      <Brush dataKey="x" height={30} stroke="#8884d8">
        <Line
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          activeDot={{ r: 5 }}
        />
      </Brush>
      <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 5 }} />
    </LineChart>
  );
};

export default LineGraph;
