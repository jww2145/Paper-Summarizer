import React from "react";
import PasteText from "./PasteText"

function PostArticle({summarizePaste}){
    return(
        <div id = "textForm">
            <h3>Copy and Paste</h3>
            <PasteText summarizePaste = {summarizePaste}/>
        </div>
    )
}

export default PostArticle
