import React, {useState} from 'react'
import ArticleContainer from './ArticleContainer'
import PostArticle from './PostArticle'


function Copy() {
    const [body, setBody] = useState([])
    const [displayActive, setDisplayActive] = useState(false)

    const summarizePaste = (article) => {
        fetch(`https://api.intellexer.com/summarizeText?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestriction=7&returnedTopicsCount=2&summaryRestriction=7&textStreamLength=1000`,{
            method: 'POST',
            body: JSON.stringify(article)
        })
        .then(res => res.json())
        .then(data => {
          if(data.items){
            setBody(data.items)
          }else{
            setDisplayActive(false)
          }
        })
    }

  return (
    <div>
         {!displayActive && <PostArticle  setDisplayActive = {setDisplayActive} summarizePaste={summarizePaste}/>}
         <ArticleContainer summary={body}/>
    </div>
  )
}

export default Copy