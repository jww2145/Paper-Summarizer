import React,{ useState, useEffect } from "react";
import PasteText from "./PasteText"

function PostArticle(){

    const [body, setBody] = useState('')

    const summarizePaste = (body) => {
        fetch(`https://api.intellexer.com/summarizeText?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestriction=7&returnedTopicsCount=2&summaryRestriction=7&textStreamLength=1000`,{
            method: 'POST',
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return(
        <div>
            <h1>Summarize Text</h1>
            <PasteText body = {body} setBody = {setBody} summarizePaste = {summarizePaste}/>
        
        </div>
    )
}

export default PostArticle
