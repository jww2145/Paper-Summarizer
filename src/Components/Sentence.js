import React from 'react'

function Sentence({item}) {
  return (
    <div className='single-article'>
      <h3>{item.title}</h3>
    <p>{item.text}</p>
    </div>
  )
}

export default Sentence