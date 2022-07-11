import React from 'react'

function Article(article) {
  return (
    <div className='single-article'>Article
    <h3>{article.title}</h3>
    </div>
  )
}

export default Article