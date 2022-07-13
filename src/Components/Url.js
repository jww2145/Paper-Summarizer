import React, {useState} from 'react'
import ArticleContainer from './ArticleContainer'
import ArticleSummarizer from './ArticleSummarizer'

function Url() {

    const [summary, setSummary] = useState([])
    const [displayActive,setDisplayActive] = useState(false)

    const postArticle = (newArticle) => {
        fetch(`http://api.intellexer.com/summarize?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestrictions=7&summaryRestriction=7&url=${newArticle.url}`)
          .then(res => res.json())
          .then(newSummary => {
            if(newSummary.items){
               setSummary(newSummary.items)
            }else{
               setDisplayActive(false)
             }
          })
        }



  return (
    <div>
        {!displayActive && <ArticleSummarizer  setDisplayActive = {setDisplayActive} postArticle={postArticle}/>}
        <ArticleContainer   summary={summary} />
    </div>
  )
}

export default Url