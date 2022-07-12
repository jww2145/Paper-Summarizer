import React from 'react'
import Sentence from './Sentence'



function ArticleContainer({summarizedText, rank}) {
  console.log(rank)

  const showSummary = summarizedText.map(item => <Sentence key = {item.rank} item={item} />)

  return (
    <div className='ArticleContainer'>
        {showSummary}
      
    </div>
  )
}

export default ArticleContainer