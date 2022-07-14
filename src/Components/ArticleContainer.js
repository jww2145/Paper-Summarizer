import React from 'react'
import Sentence from './Sentence'


function ArticleContainer({summary}) {

  const showSummary = summary.map(item => <Sentence key = {item.rank} item={item} />)

 


  return (
    <div id='summary-container'>
        <h2>Summary</h2>
          {showSummary}
          {showSummary? null : 'Loading...'}
    </div>
  )
}

export default ArticleContainer