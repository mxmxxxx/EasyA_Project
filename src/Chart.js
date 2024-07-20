import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border: 1px solid #d1d1d1;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  margin: 0 10px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const Chart = () => {
  const [showFollowers, setShowFollowers] = useState(true);
  const [showViews, setShowViews] = useState(true);

  const data = [
    { name: 'Jan', followers: 4000, views: 2400 },
    { name: 'Feb', followers: 3000, views: 1398 },
    { name: 'Mar', followers: 2000, views: 9800 },
    { name: 'Apr', followers: 2780, views: 3908 },
    { name: 'May', followers: 1890, views: 4800 },
    { name: 'Jun', followers: 2390, views: 3800 },
    { name: 'Jul', followers: 3490, views: 4300 },
  ];

  return (
    <ChartContainer>
      <RadioGroup>
        <RadioLabel>
          <RadioInput
            type="checkbox"
            checked={showFollowers}
            onChange={() => setShowFollowers(!showFollowers)}
          />
          Followers
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="checkbox"
            checked={showViews}
            onChange={() => setShowViews(!showViews)}
          />
          Views
        </RadioLabel>
      </RadioGroup>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {showFollowers && <Line type="monotone" dataKey="followers" stroke="#8884d8" activeDot={{ r: 8 }} />}
          {showViews && <Line type="monotone" dataKey="views" stroke="#82ca9d" activeDot={{ r: 8 }} />}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default Chart;
