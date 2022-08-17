import React from "react";
import {Doughnut} from "react-chartjs-2";

const data={
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            "red",
            "blue",
            "yellow",
            "green",
            "purple",
            "orange"
        ]
    }]
};
function DoughnutChart(){
    return <div>
        <h1>Doughnut</h1>
        <div style={{width:"500px",margin:"0 auto"}}>
        <Doughnut data={data}/>
        </div>
    </div>;
}

export default DoughnutChart;