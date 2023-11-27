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
      text: 'State & Textile Mills',
    },
  },
}
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
      backgroundColor: '#0987A0',
    }
  ],
};

const MillChartsm = () => {
  return <Bar options={options} data={data} /> ;
};

export default MillChartsm ;
