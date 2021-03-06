import React from "react";
import PasteText from "./PasteText"

function PostArticle({summarizePaste, setDisplayActive, setSpinner}){
    return(
        <div id = "textForm">
            <h3>Copy and Paste</h3>
            <PasteText setDisplayActive={setDisplayActive} setSpinner = {setSpinner} summarizePaste = {summarizePaste}/>
        </div>
    )
}

export default PostArticle
