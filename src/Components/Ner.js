import React, {useState} from 'react'

function Ner({recognizeEntity, setDisplayActive, setWhichDisplay}) {

    const [ner, setNer] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const newEntity = {ner: ner}
        recognizeEntity(newEntity)
        setDisplayActive(true)
        setWhichDisplay('ner')
    }

const handleUrlChange = (e) => {
    setNer(e.target.value)
}

  return (
    <div id = "chartForm">
        <h3>Named Entity Recognizer</h3>
        <form onSubmit={handleSubmit} className='ner-form'>
            <input value={ner} onChange={handleUrlChange} required />
            <input type="submit" value="Recognize" />
        </form>
    </div>
  )
}

export default Ner