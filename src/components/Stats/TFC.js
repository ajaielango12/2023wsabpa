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
import { Line } from 'react-chartjs-2';


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
      text: 'Top 5 Countries of Import Into India',
    },
  },
};

const labels = ['2017', '2018', '2019', '2020', '2021'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Mongolia',
      data: ['62.60',	'86.20','58.59','64.99','31.16'],
      backgroundColor: '#1C4532',
      borderColor:'#1C4532',
    },
    {
      label: 'Bangladesh' ,
      data: ['56.94',	'59.98','58.87','57.53','47.14'],
      backgroundColor: '#38B2AC',
      borderColor: '#38B2AC',
    },
    
    {
      label: 'Mali' ,
      data: ['53.82',	'59.55','63.56','35.56','16.35'],
      backgroundColor: '#2B6CB0',
      borderColor: '#2B6CB0',

    },
    {
      label: 'Cambodia' ,
      data: ['33.45', '36.62',	'51.18','42.89','21.32'],
      backgroundColor: '#D53F8C',
      borderColor: '#D53F8C',
    },
    {
      label: 'Turkmenistan' ,
      data: ['32.02','10.85','11.59','0.77'],
      backgroundColor: '#805AD5',
       borderColor: '#805AD5',
    },
  ],
};

const ImportFC = () => {
  return <Line options={options} data={data} />;
};

export default ImportFC;