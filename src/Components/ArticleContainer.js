import React from 'react'
import Sentence from './Sentence'



function ArticleContainer({summary}) {

  const showSummary = summary.map(item => <Sentence key = {item.rank} item={item} />)

  return (
    <div>
        {showSummary}
    </div>
  )
}

export default ArticleContainer