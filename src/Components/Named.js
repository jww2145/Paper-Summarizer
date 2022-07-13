import React, {useState} from 'react'
import ChartContainer from './ChartContainer'
import Ner from './Ner'

function Named() {
    const [namedData, setNamedData] = useState([])

    const [displayActive,setDisplayActive] = useState(false)

    const recognizeEntity = (newEntity) => {
        fetch(`https://api.intellexer.com/recognizeNe?apikey=${process.env.REACT_APP_API_KEY}&loadNamedEntities=true&url=${newEntity.ner}`)
        .then(res => res.json())
        .then(reData => {
          if(reData.entities){
            setNamedData(reData.entities)
          }else{
            setDisplayActive(false)
          }
        })
      }

      let output = [['Entities', 'Appearances']]

      namedData.forEach(entity => {
        if(entity.type == 1){
          output.push([`${entity.text}`, entity.sentenceIds.length])
        }
      })

  return (
    <div>
        {!displayActive && <Ner  setDisplayActive = {setDisplayActive} recognizeEntity={recognizeEntity}/>}
        <ChartContainer  data={output}/>
    </div>
  )
}

export default Named