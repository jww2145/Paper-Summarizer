
import React, {useState} from 'react'


function ArticleSummarizer({postArticle, setDisplayActive, setSpinner}) {

  const [url, setUrl] = useState('')
  const [selection, setSelection] = useState(7)

  function handleSubmit(e) {
      e.preventDefault();
      const newArticle = {url: url}
      postArticle(newArticle, selection)
      setDisplayActive(true)
      setSpinner(true)
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
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
        </select>
        <input type="submit" value="Submit Url" />
      </form>
    </div>
  )
}

export default ArticleSummarizer