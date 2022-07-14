import React, {useState} from 'react'
import ArticleContainer from './ArticleContainer'
import ArticleSummarizer from './ArticleSummarizer'


function Url() {

    const [summary, setSummary] = useState([])
    const [displayActive,setDisplayActive] = useState(false)

    const postArticle = (newArticle, textAmount) => {
        fetch(`http://api.intellexer.com/summarize?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestrictions=${textAmount.selection}&summaryRestriction=${textAmount.selection}&url=${newArticle.url}`)
          .then(res => res.json())
          .then(newSummary => {
            if(newSummary.items){
               setSummary(newSummary.items)
            }else{
               setDisplayActive(false)
             }
          })
        }

<<<<<<< HEAD

       
=======
        function handleClick(){
          setDisplayActive(false)
        }

>>>>>>> 1827e8e (Wrapping up CSS)
  return (
    <div>
        
        {!displayActive && <ArticleSummarizer  setDisplayActive = {setDisplayActive} postArticle={postArticle}/>}
<<<<<<< HEAD
        <ArticleContainer   summary={summary} />

        
=======
        {displayActive && <ArticleContainer   summary={summary} />}
        {displayActive && <button type='button' onClick = {handleClick}>Go Back</button>}
>>>>>>> 1827e8e (Wrapping up CSS)
    </div>
  )
}

export default Url