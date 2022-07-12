
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
    <form onSubmit={handleSubmit} className="link-form">
        <input onChange={handleUrlChange} value={url} placeholder="Enter Article Link" type="text"/>
        <input type="submit" value="send new article" />
    </form>
  )
}

export default ArticleSummarizer