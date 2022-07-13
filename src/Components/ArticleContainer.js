import React from 'react'
import Sentence from './Sentence'
import PieChart from "./PieChart"
import { Chart } from "react-google-charts";


function ArticleContainer({summary, whichDisplay, data}) {

  const showSummary = summary.map(item => <Sentence key = {item.rank} item={item} />)

  const displayChart = whichDisplay === 'ner'

  return (
    <div>
        {!displayChart && showSummary}
        {displayChart && <Chart 
          chartType = "PieChart"
          data = {data}
        />}
    </div>
  )
}

export default ArticleContainer