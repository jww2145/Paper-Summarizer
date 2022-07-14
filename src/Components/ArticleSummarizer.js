import Chip from '@mui/material/Chip';
import React,{useState} from 'react';

function ArticleSummarizer({postArticle, setDisplayActive, setSpinner}) {

  const [url, setUrl] = useState('')
  const [selection, setSelection] = useState(5)
  const [characters, setCharacters] = useState(1000)

  function handleSubmit(e) {
      e.preventDefault();
      const newArticle = {url: url}
      postArticle(newArticle, selection, characters)
      setDisplayActive(true)
      setSpinner(true)
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  function handleClickShort(){
      setSelection(6);
      setCharacters(1000);
  }
  
  function handleClickMedium(){
    setSelection(9);
    setCharacters(2000) 
  }

  function handleClickLong(){
    setSelection(12)
    setCharacters(6000)
  }

  console.log(selection, characters)

  return (
    <div id = "urlForm">
      <h3>Drop a URL and select amount of text</h3>
      <form onSubmit={handleSubmit} className="link-form">
        <input onChange={handleUrlChange} value={url} placeholder="Enter Article Link" type="text" required/> <input type="submit" value="Submit Url" />
        <Chip label="Quick Summary" onClick = {handleClickShort}/> 
        <Chip  label = "Light Reading" onClick = {handleClickMedium}/>
        <Chip label = "Rabbit Hole" onClick = {handleClickLong}/>
      </form>
    </div>
  )
}
export default ArticleSummarizer