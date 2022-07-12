import React,{ useState, useEffect } from "react";
import PasteText from "./PasteText"

function PostArticle({body, setBody, summarizePaste}){
    return(
        <div>
            <h3>Copy and Paste</h3>
            <PasteText body = {body} setBody = {setBody} summarizePaste = {summarizePaste}/>
        </div>
    )
}

export default PostArticle
