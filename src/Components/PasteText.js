import React, {useState} from "react";

function PasteText({summarizePaste, setDisplayActive}){

    const [article, setArticle] = useState('')

    function handleForm(e){
        setArticle(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setDisplayActive(true)
        summarizePaste(article)
    }

    return(
        <form onSubmit = {(e) => handleSubmit(e)}>
            <textarea id = 'largeForm' value = {article} onChange = {(e) => handleForm(e)} required/>
            <input type="submit" value="Get Text Summary" />
        </form>
    )
}

export default PasteText