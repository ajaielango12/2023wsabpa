import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
  
    title: {
      display: true,
      text: 'EXIM Data',
    },
  },
};

const labels = ['2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022'];

export const data = {
  labels,
  datasets: [
    {
      label: 'SITP Investments (INR Crore)',
      data: [400, 450, 500, 550, 600],
      backgroundColor: '#00A3C4',
    },
  
  ],
};

const Investmentgoi = () => {
  return <Bar options={options} data={data} />;
};

export default Investmentgoi ;


