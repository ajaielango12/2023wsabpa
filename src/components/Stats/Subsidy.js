import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Subsidies and Its Disbursed Funds',
    },
  },
};

const labels = ['2019-20', '2020-21','2021-22',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Handloom',
      data: [373.37, 315.95, 85.66],
      backgroundColor: '#2F855A',
    },
    {
      label: 'Handicrafts',
      data: [267.73, 270.18, 39.96],
      backgroundColor: '#1C4532',
    },
    {
      label: 'Wool',
      data: [16.5, 9.33, 3.7],
      backgroundColor: '#319795',
    },
    {
      label: 'Silk',
      data: [787.61, 650.01, 218.75],
      backgroundColor: '#1D4044',
    },
    {
      label: 'Powerloom',
      data: [41.51, 55.03, 6.81],
      backgroundColor: '#80DEEA',
    },
    {
      label: 'Jute',
      data: [104.42, 71.5, 13.62],
      backgroundColor: '#3182CE',
    },
    {
      label: 'Technology Upgradation Funds Schemes (TUFs)',
      data: [317.9, 556.39, 70.35],
      backgroundColor: '#2C5282',
    },
    {
      label: 'Scheme for Integrated Textile Parks(SITP)',
      data: [41.01, 79.91, 23.89],
      backgroundColor: '#1A365D',
    },
    {
      label: 'Procurement of Cotton',
      data: [1017.57, 662.71, 136],
      backgroundColor: '#0987A0',
    },
    {
      label: 'SAMARTH',
      data: [71.75, 90.71, 2.19],
      backgroundColor: '#065666',
    },
    {
      label: 'National Technology Textiles Mission',
      data: [0, 0, 40.94],
      backgroundColor: '#553C9A',
    },
    {
      label: 'Integrated Processing Development Scheme',
      data: [10.17, 49.71, 30.77],
      backgroundColor: '#322659',
    },
  ],
};

const Subsidy = () => {
  return <Bar options={options} data={data} />;
};

export default Subsidy;