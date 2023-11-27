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
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth:0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Number Of Mills',
    },
    },
};
const labels = ['Andhra Pradesh','Assam','Bihar','Chhattisgarh','Dadra Nagar Haveli','Daman & Diu',
'Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu & Kashmir','Jharkhand',
'Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Odisha','Pondicherry', 
'Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh','Uttaranchal'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Number of Mills ',
      data: [154,9,4,1,14,3,3,1,150,194,21,2,1,51,40,71,23,15,158,96,202,44,120,14,37,100],
      backgroundColor: '#553C9A',
    }
  ],
};

const MillCharts = () => {
  return <Bar options={options} data={data} /> ;
};

export default MillCharts ;
