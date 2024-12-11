'use client';
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Present', value: 75 },
  { name: 'Absent', value: 15 },
  { name: 'Leave', value: 10 },
];

const COLORS = ['#0088FE', '#FF8042', '#FFBB28'];

const PieChart: React.FC = () => {
  return (
    <RechartsPieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </RechartsPieChart>
  );
};

export default PieChart;
