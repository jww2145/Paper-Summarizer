import Chip from '@mui/material/Chip';
import React,{useState} from 'react';

function ArticleSummarizer({postArticle, setDisplayActive, setSpinner}) {

  const [url, setUrl] = useState('')

  function handleSubmit(x,y) {
      const newArticle = {url: url}
      postArticle(newArticle, x, y)
      setDisplayActive(true)
      setSpinner(true)
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }


  return (
    <div id = "urlForm">
      <h3>Drop a URL and select amount of text</h3>
      <form className="link-form">
        <input onChange={handleUrlChange} value={url} placeholder="Enter Article Link" type="text" required/>
        <div className='chip-container'>
          <Chip label="Light Reading" onClick = {() => {handleSubmit(5,1000)}}/> 
          <Chip  label = "Get the Gist" onClick = {() => {handleSubmit(7,2000)}}/>
          <Chip label = "Rabbit Hole" onClick = {() => {handleSubmit(13,6000)}}/>
        </div>
      </form>
    </div>
  )
}
export default ArticleSummarizer