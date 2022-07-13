import React from 'react'
import Sentence from './Sentence'
import PieChart from "./PieChart"
import { Chart } from "react-google-charts";


function ArticleContainer({summary}) {

  const showSummary = summary.map(item => <Sentence key = {item.rank} item={item} />)

 


  return (
    <div id='summary-container'>
        <h2>Summary</h2>
          {showSummary}
    </div>
  )
}

export default ArticleContainer