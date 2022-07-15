import React, {useState} from "react";
import Chip from '@mui/material/Chip';

function PasteText({summarizePaste, setDisplayActive, setSpinner}){

    const [article, setArticle] = useState('')


    function handleForm(e){
        setArticle(e.target.value.trim().replace(/(\r\n|\n|\r)/gm, ""))
    }

    function handleSubmit(x,y){
        setDisplayActive(true)
        summarizePaste(article,x,y)
        setSpinner(true)
    }

    return(
        <form>
            <textarea id = 'largeForm' value = {article} onChange = {(e) => handleForm(e)} required/>
            <div className='chip-container'>
                <Chip label="Light Reading" onClick = {() => {handleSubmit(5,1000)}}/> 
                <Chip  label = "Get the Gist" onClick = {() => {handleSubmit(7,2000)}}/>
                <Chip label = "Rabbit Hole" onClick = {() => {handleSubmit(13,6000)}}/>
            </div>
        </form>
    )
}

export default PasteText