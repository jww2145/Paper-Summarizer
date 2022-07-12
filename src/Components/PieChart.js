import React from "react";
import { Chart } from "react-google-charts";

function PieChart({data}){

    return(
    <Chart
        chartType="PieChart"
    data={data}
    width="100%"
    height="400px"
    legendToggle
  />)
}

export default PieChart