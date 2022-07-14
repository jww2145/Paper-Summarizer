
import React, {useState} from 'react'


function ArticleSummarizer({postArticle, setDisplayActive, setWhichDisplay}) {

  const [url, setUrl] = useState('')
  const [selection, setSelection] = useState('')


  function handleSubmit(e) {
      e.preventDefault();
      const newArticle = {url: url}
      const textAmount = {selection: selection}
      postArticle(newArticle, textAmount)
      setDisplayActive(true)
      setWhichDisplay('url')
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }
  


  return (
    <div id = "urlForm">



      <h3>Drop a URL and select amount of text</h3>
      <form onSubmit={handleSubmit} className="link-form">
      
        <input onChange={handleUrlChange} value={url} placeholder="Enter Article Link" type="text" required/>
        <select value={selection} onChange={e => setSelection(e.target.value)} >
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
        <input type="submit" value="Submit Url" />
      </form>
    </div>
  )
}

export default ArticleSummarizer