import React from 'react'
import Sentence from './Sentence'

function ArticleContainer({summary}) {

  const showSummary = summary.map(item => <Sentence item={item} />)


  return (
    <div className='ArticleContainer'>
        {showSummary}
    </div>
  )
}

export default ArticleContainer