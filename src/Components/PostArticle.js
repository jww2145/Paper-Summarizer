import React,{ useState, useEffect } from "react";
import PasteText from "./PasteText"

function PostArticle({body, setBody, summarizePaste}){
    return(
        <div>
            <h1>Summarize Text</h1>
            <PasteText body = {body} setBody = {setBody} summarizePaste = {summarizePaste}/>
        </div>
    )
}

export default PostArticle
