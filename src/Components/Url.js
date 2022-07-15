import React, {useState} from 'react'
import ArticleContainer from './ArticleContainer'
import ArticleSummarizer from './ArticleSummarizer'
import Spinner from 'react-bootstrap/Spinner'




function Url() {

    const [summary, setSummary] = useState([])
    const [displayActive,setDisplayActive] = useState(false)
    const [spinner, setSpinner] = useState(false)
   


    const postArticle = (newArticle,selection, characters) => {
        fetch(`http://api.intellexer.com/summarize?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestrictions=${selection}&summaryRestriction=${selection}&textStreamLength=${characters}&url=${newArticle.url}`)
          .then(res => res.json())
          .then(newSummary => {
            if(newSummary.items){
               setSummary(newSummary.items)
               setSpinner(false)
            }else{
               setDisplayActive(false)
               setSpinner(false)
             }
          })
        }
    
    function handleClick(){
        setDisplayActive(false)
        setSummary([])
    }

 
  return (
    <div>
        {!displayActive && <ArticleSummarizer setSpinner = {setSpinner} setDisplayActive = {setDisplayActive} postArticle={postArticle}/>}
        {displayActive && <ArticleContainer   summary={summary} />}
        <div id = "summary">
          {spinner && <Spinner animation="border" role="status"/>}
          {displayActive && <button type='button' onClick = {handleClick}>{spinner ? 'Abort' : 'Go Back'}</button>}
        </div>

        
    </div>
    
  )
}

export default Url