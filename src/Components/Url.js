import React, {useState} from 'react'
import ArticleContainer from './ArticleContainer'
import ArticleSummarizer from './ArticleSummarizer'


function Url() {

    const [summary, setSummary] = useState([])
    const [displayActive,setDisplayActive] = useState(false)


    const postArticle = (newArticle,selection) => {
        fetch(`http://api.intellexer.com/summarize?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestrictions=${selection}&summaryRestriction=${selection}&url=${newArticle.url}`)
          .then(res => res.json())
          .then(newSummary => {
            if(newSummary.items){
               setSummary(newSummary.items)
            }else{
               setDisplayActive(false)
             }
          })
        }
        function handleClick(){
          setDisplayActive(false)
        }

  return (
    <div>
        
        {!displayActive && <ArticleSummarizer setDisplayActive = {setDisplayActive} postArticle={postArticle}/>}
        {displayActive && <ArticleContainer   summary={summary} />}
        {displayActive && <button type='button' onClick = {handleClick}>Go Back</button>}
    </div>
  )
}

export default Url