import React, {useState} from 'react'

function NER({recognizeEntity}) {

    const [ner, setNer] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        const newEntity = {ner: ner}
        recognizeEntity(newEntity)
    }

const handleUrlChange = (e) => {
    setNer(e.target.value)
}

  return (
    <div>
        <h1>Named Entity Recognizer</h1>
        <form onSubmit={handleSubmit} className='ner-form'>
            <input value={ner} onChange={handleUrlChange} />
            <input type="submit" value="Recognize" />
        </form>
    </div>
  )
}

export default NER