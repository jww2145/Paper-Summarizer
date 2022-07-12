import React from 'react'
import Sentence from './Sentence'



function ArticleContainer({summarizedText}) {

  const showSummary = summarizedText.map(item => <Sentence item={item} />)





  return (
    <div className='ArticleContainer'>
        {showSummary}
      
    </div>
  )
}

export default ArticleContainer