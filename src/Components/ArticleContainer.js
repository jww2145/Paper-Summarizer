import React from 'react'
import Sentence from './Sentence'



<<<<<<< HEAD
function ArticleContainer({summarizedText, rank}) {
  console.log(rank)
=======
function ArticleContainer({summarizedText}) {
>>>>>>> c1f3df82b21becce14f15f1c655181d95c0d5205

  const showSummary = summarizedText.map(item => <Sentence key = {item.rank} item={item} />)

  return (
    <div className='container-child-2'>
        {showSummary}
    </div>
  )
}

export default ArticleContainer