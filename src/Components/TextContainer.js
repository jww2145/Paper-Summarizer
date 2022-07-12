import React from 'react'
import Text from './Text'

function TextContainer({body}) {

    const showText = body.map(bodyItem => <Text bodyItem={bodyItem} />) 

  return (
    <div>
        {showText}
    </div>
  )
}

export default TextContainer