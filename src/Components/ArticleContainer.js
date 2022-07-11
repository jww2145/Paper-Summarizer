import React from 'react'
import Article from './Article'

function ArticleContainer({summary}) {

const showSummary = summary.map(article => <Article article={article} />)

  return (
    <div className='ArticleContainer'>
        {showSummary}
    </div>
  )
}

export default ArticleContainer