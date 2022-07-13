import React from "react";
import PasteText from "./PasteText"

function PostArticle({summarizePaste, setDisplayActive, setWhichDisplay}){
    return(
        <div id = "textForm">
            <h3>Copy and Paste</h3>
            <PasteText setDisplayActive={setDisplayActive} setWhichDisplay = {setWhichDisplay} summarizePaste = {summarizePaste}/>
        </div>
    )
}

export default PostArticle
