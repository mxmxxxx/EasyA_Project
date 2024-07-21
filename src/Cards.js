import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border: 1px solid #d1d1d1;
  text-align: center;
  flex: 1;
  margin: 10px;
`;

const Title = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.color};
`;

const PercentageChange = styled.div`
  font-size: 14px;
  color: ${props => props.color};
`;

const Cards = ({ title, value, valueColor, percentageChange, percentageColor }) => (
  <CardContainer>
    <Title>{title}</Title>
    <Value color={valueColor}>{value}</Value>
    <PercentageChange color={percentageColor}>{percentageChange}</PercentageChange>
  </CardContainer>
);

export default Cards;
