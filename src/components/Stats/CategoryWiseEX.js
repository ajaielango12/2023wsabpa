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
      text: 'Category Wise Indian Textile Exports 2017-2021',
    },
  },
};

const labels = ['2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022'];

export const data = {
  labels,
  datasets: [
    { 
      label: 'Ready-made garments (RMG)',
      data: [26046, 29493, 31904, 26892, 37034],
      backgroundColor: '#4FD1C5',
    },
    {
      label: 'Cotton',
      data: [6146, 6562, 6845, 5970, 7617],
      backgroundColor: '#319795',
    },
    {
      label: 'Manufactured fiber fabrics',
      data: [4819, 5190, 5474, 4634, 5926],
      backgroundColor: '#285E61',
    },
    {
      label: 'Man-made fiber yarn',
      data: [3112, 3563, 4034, 3407, 4357],
      backgroundColor: '#3182CE',
    },
    {
      label: 'Woolen & worsted fabrics',
      data: [872, 926, 991, 882, 1123],
      backgroundColor: '#2C5282',
    },
    {
      label: 'Silk fabrics',
      data: [1680, 1918, 2102, 1868, 2393],
      backgroundColor: '#00B5D8',
    },
    {
      label: 'Jute manufactures',
      data: [1092, 1179, 1283, 1156, 1433],
      backgroundColor: '#0987A0',
    },
    {
      label: 'Handloom products',
      data: [874, 994, 1097, 981, 1214],
      backgroundColor: '#805AD5',
    },
    {
      label: 'Handicrafts (excluding handloom)',
      data: [1746, 1897, 2102, 1868, 2393],
      backgroundColor: '#553C9A',
    },
    {
      label: 'Other textile items',
      data: [3476, 3954, 4349, 3719, 4753],
      backgroundColor: 'black',
    },
  ],
};

const Categoryexport = () => {
  return <Bar options={options} data={data} />;
};

export default Categoryexport ;


