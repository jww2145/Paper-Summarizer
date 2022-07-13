
import React, {useState} from 'react'


function ArticleSummarizer({postArticle, setUrlActive}) {

  const [url, setUrl] = useState('')

  function handleSubmit(e) {
      e.preventDefault();
      setUrlActive(true)
      const newArticle = {url: url}
      postArticle(newArticle)
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  return (
    <div>
      <h3>Drop a URL</h3>
      <form onSubmit={handleSubmit} className="link-form">
        <input onChange={handleUrlChange} value={url} placeholder="Enter Article Link" type="text" required/>
        <input type="submit" value="Submit Url" />
      </form>
    </div>
  )
}

export default ArticleSummarizer