import React from 'react'
import Sentence from './Sentence'



function ArticleContainer({summarizedText, summary}) {

  const showSummary = summary.map(item => <Sentence key = {item.rank} item={item} />)

  return (
    <div className='container-child-2'>
        {showSummary}
    </div>
  )
}

export default ArticleContainer