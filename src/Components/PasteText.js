import React from "react";

function PasteText({body, setBody, summarizePaste}){

    function handleForm(e){
        setBody(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(body)
        summarizePaste(body)
    }

    return(
        <form onSubmit = {(e) => handleSubmit(e)}>
            <input type="text" value = {body} onChange = {(e) => handleForm(e)} />
            <input type="submit" value="Paste Text" />
        </form>
    )
}

export default PasteText