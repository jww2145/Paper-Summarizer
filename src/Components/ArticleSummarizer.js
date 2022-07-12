
import React, {useState} from 'react'


function ArticleSummarizer({postArticle}) {

  const [url, setUrl] = useState('')

  function handleSubmit(e) {
      e.preventDefault();
      const newArticle = {url: url}
      postArticle(newArticle)
      console.log(newArticle.url)
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  return (
    <div>
      <h3>Drop an URL</h3>
      <form onSubmit={handleSubmit} className="link-form">
        <input onChange={handleUrlChange} value={url} placeholder="Enter Article Link" type="text"/>
        <input type="submit" value="Submit Url" />
      </form>
    </div>
  )
}

export default ArticleSummarizer