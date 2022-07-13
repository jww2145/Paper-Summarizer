import React, {useState} from 'react'

function Ner({recognizeEntity, setChartActive}) {

    const [ner, setNer] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        setChartActive(true)
        const newEntity = {ner: ner}
        recognizeEntity(newEntity)
    }

const handleUrlChange = (e) => {
    setNer(e.target.value)
}

  return (
    <div className='child-component-2'>
        <h3>Named Entity Recognizer</h3>
        <form onSubmit={handleSubmit} className='ner-form'>
            <input value={ner} onChange={handleUrlChange} required />
            <input type="submit" value="Recognize" />
        </form>
    </div>
  )
}

export default Ner