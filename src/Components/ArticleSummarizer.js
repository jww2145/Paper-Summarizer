
import React, {useState, UseEffect} from 'react'




function ArticleSummarizer({summary, setSummary, postArticle}) {

    const [url, setUrl] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        const newArticle = {url: url}

        postArticle(newArticle)
    }


const handleUrlChange = (e) => {
    setUrl(e.target.value)
}

  return (
    <form onSubmit={handleSubmit} className="link-form">
        <input onChange={handleUrlChange} value={url} placeholder="Enter Article Link" type="text"/>
        <input type="submit" valiue="send new article" />
    </form>
  )
}

export default ArticleSummarizer