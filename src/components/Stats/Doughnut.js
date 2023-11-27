import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['USA','EU','Bangladesh','China','Pakistan','UAE','Vietnam','Sri Lanka','Brazil','South Korea','Rest of World'],
  datasets: [
    {
      label: 'Market Share In $ USD MN',
      data: [3881,3318,2268,1281,687,604,554,518 ,411 ,339,8655],
 
      backgroundColor: [
        '#38B2AC',
        '#319795',
        '#285E61',
        '#3182CE',
        '#2C5282',
        '#1A365D','#805AD5','#553C9A','#D53F8C','#521B41','#322659'
      ],
      
    },
  ],
};

const Ring = () => {
  return <Doughnut data={data} />;
};

export default Ring;
