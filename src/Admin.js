import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { Doughnut } from 'react-chartjs-2';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Admin = () => {
  const [data, setData] = useState([]);
  const [Electronic, setElectronic] = useState([]);
  let API = "https://fakestoreapi.com/products/";
  useEffect(() => {
    AppData();
    Handleelectronics();
  }, []);
  let AppData = () => {
    axios.get(API).then((res) => {
      setData(res.data);
    });
  };
  let Handleelectronics = () => {
    axios.get(`${API}/category/electronics`).then((res) => {
      console.log(res.data);
      setElectronic(res.data);
    });
  };

  const Value = {
    labels: [data.length, "Electronics", ""],
    datasets: [
      {
        labels: "369",
        data: [data.length],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        labels: "369",
        data: [Electronic.length],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const options = {};
  return (
    <div classname="App">
      <h1>Chart Table</h1>

      <div>
        <Bar data={Value} options={options}></Bar>
      </div>
    </div>
  );
};

export default Admin;
