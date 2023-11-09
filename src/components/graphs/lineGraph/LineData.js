import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./LineChart.css"

const LineData = ({ data }) => {
  return (
    <LineChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="line1" stroke="#8884d8" />
      <Line type="monotone" dataKey="line2" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineData;
