import React from 'react'
import Sentence from './Sentence'
import PieChart from "./PieChart"
import { Chart } from "react-google-charts";


function ArticleContainer({summary, whichDisplay, data}) {

  const showSummary = summary.map(item => <Sentence key = {item.rank} item={item} />)

  const displayChart = whichDisplay === 'ner'

  console.log(data)

  let top = []

  if(displayChart){
    top.push(data[0])
      
    let newArray = data.slice(1)

    let sum = 0

    newArray.forEach(arr => {
        sum += arr[1]
    })

    let average = sum / (data.length - 1)
    let others = 0

    data.forEach(arr => {
      if(arr[1] > average){
        top.push(arr)
      }else{
        others++
      }
    })

    top.push(['Others', others])
  }

  const options = {
    chartArea:{
      width: '100%',
      height: '80%',
    },
    colors: ['#AF9f8C', '#7F867B', '#C7C7BB', '#D4C8BE', 'D4BAB0', '#7F867B', '#C1ABAD', '#C7C7BB', '#BA494B', '#E5CBC1', '#F0E7DA', '#A6B4B3', '#E3E4E0'],
    is3D: true,
    backgroundColor: {
        fill: '#EFEDE7',
        stroke: '#b0b0b0',
        strokeWidth: 2
      },
    legend: { position: "bottom" }
  };


  return (
    <div>
      {!displayChart && <div id='summary-container'>
        <h2>{displayChart ? 'Named Entities' : 'Summary'}</h2>
          {showSummary}
      </div>}
      {displayChart && <div id = "chart-container">
        <h2>{displayChart ? 'Named Entities' : 'Summary'}</h2>
        {<Chart 
            chartType = "PieChart"
            data = {top}
            options = {options}
          />}
      </div>}
    </div>
  )
}

export default ArticleContainer