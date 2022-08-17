import { useEffect, useState } from 'react';
import './App.css';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
          "rgba(255, 99, 102, 1)",
          "rgba(255, 205, 88, 1)",
          "rgba(54, 162, 233, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  backgroundColor: [
    "rgba(255, 99, 102, 1)",
    "rgba(255, 205, 88, 1)",
    "rgba(54, 162, 233, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(153, 102, 255, 1)",
  ],
};
function App() {
  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
          "rgba(255, 99, 102, 1)",
          "rgba(255, 205, 88, 1)",
          "rgba(54, 162, 233, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
    },
  ],
  labels: [
   
      "rgba(255, 99, 102, 1)",
      "rgba(255, 205, 88, 1)",
      "rgba(54, 162, 233, 1)",
      "rgba(255, 159, 64, 1)",
      "rgba(153, 102, 255, 1)",
    
  ], 
});
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for(var i of res) {
            label.push(i.name);
            data.push(i.id)
        }
        setData(
          {
            datasets: [{
                data:data,
                backgroundColor: [
                  "rgba(255, 99, 102, 1)",
                  "rgba(255, 205, 88, 1)",
                  "rgba(54, 162, 233, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(153, 102, 255, 1)",
                ],
                
            },
          ],
          labels:label, 
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])
  return (
    <div className="App" style={{width:'30%', height:'30%'}}>
      <Doughnut data={data}/>
    </div>
  );
}

export default App;