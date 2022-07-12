import React from 'react'

function Text({bodyItem}) {
    console.log(bodyItem)
  return (
    <div className='conatiner-child-3'>

       <p>{bodyItem.text}</p> 
    </div>
  )
}

export default Text