import React, {useState} from 'react'
import ArticleContainer from './ArticleContainer'
import PostArticle from './PostArticle'
import Spinner from 'react-bootstrap/Spinner'


function Copy() {
    const [body, setBody] = useState([])
    const [displayActive, setDisplayActive] = useState(false)
    const [spinner, setSpinner] = useState(false)

    const summarizePaste = (article) => {
        fetch(`https://api.intellexer.com/summarizeText?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestriction=7&returnedTopicsCount=2&summaryRestriction=7&textStreamLength=1000`,{
            method: 'POST',
            body: JSON.stringify(article)
        })
        .then(res => res.json())
        .then(data => {
          if(data.items){
            setBody(data.items)
            setSpinner(false)
          }else{
            setDisplayActive(false)
            setSpinner(false)
          }
        })
    }

    function handleClick(){
      setDisplayActive(false)
    }

  return (
    <div>
      {spinner && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
         {!displayActive && <PostArticle setSpinner={setSpinner} setDisplayActive = {setDisplayActive} summarizePaste={summarizePaste}/>}
         {displayActive && <ArticleContainer summary={body}/>}
         {displayActive && <button type='button' onClick = {handleClick}>Go Back</button>}
         
    </div>
  )
}

export default Copy