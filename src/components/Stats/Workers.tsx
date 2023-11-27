import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Bar, Chart } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  LineController,
  BarController
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Mills and Textile Workers',
    },
  },
};

const labels = ['Andhra Pradesh','Assam','Bihar','Chhattisgarh','Dadra Nagar Haveli','Daman & Diu',
'Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu & Kashmir','Jharkhand',
'Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Odisha','Pondicherry', 
'Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh','Uttaranchal','West Bengal'];

export const data = {
  labels,
  datasets: [
    { type:'bar' as const,
      label: 'Number of Workers',
      data: [43039,3931,1206,1225,271,2076,72,116379,16149,14041,6956,707,14964,13027,68124,
      116307,350,14249,5158,75610,84251,70000,14887,54772,4751,32746],
      backgroundColor: '#065666',
    },
    
    
  ],
};

const Workers = () => {
  return <Chart type='bar' data={data} />;
};

export default Workers ;
