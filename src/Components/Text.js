import React from 'react'

function Text({bodyItem}) {
    console.log(bodyItem)
  return (
    <div>

       <p>{bodyItem.text}</p> 
    </div>
  )
}

export default Text