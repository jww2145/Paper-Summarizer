import React from 'react'
import Text from './Text'

function TextContainer({body}) {

    const showText = body.map(bodyItem => <Text bodyItem={bodyItem} />) 

  return (
    <div className='child-container-1'>
        {showText}
    </div>
  )
}

export default TextContainer