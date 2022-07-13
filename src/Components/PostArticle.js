import React,{ useState, useEffect } from "react";
import PasteText from "./PasteText"

function PostArticle({summarizePaste, setCopyActive}){
    return(
        <div className="child-component-2">
            <h3>Copy and Paste</h3>
            <PasteText setCopyActive = {setCopyActive} summarizePaste = {summarizePaste}/>
        </div>
    )
}

export default PostArticle
