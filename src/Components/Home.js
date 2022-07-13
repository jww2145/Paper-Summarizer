import {useState} from 'react'
import ArticleSummarizer from './ArticleSummarizer'
import ArticleContainer from "./ArticleContainer";
import PostArticle from "./PostArticle"
import Ner from "./Ner";

function Home() {

  const [summary, setSummary] = useState([])
  const [namedData, setNamedData] = useState([])
  const [body, setBody] = useState([])
  const [displayActive,setDisplayActive] = useState(false)
  const [whichDisplay, setWhichDisplay] = useState('')


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

  const recognizeEntity = (newEntity) => {
    fetch(`https://api.intellexer.com/recognizeNe?apikey=${process.env.REACT_APP_API_KEY}&loadNamedEntities=true&url=${newEntity.ner}`)
    .then(res => res.json())
    .then(reData => {
      if(reData.entities){
        setNamedData(reData.entities)
      }else{
        setDisplayActive(false)
      }
    })
  }

  let output = [['Entities', 'Appearances']]

  namedData.forEach(entity => {
    if(entity.type == 1){
      output.push([`${entity.text}`, entity.sentenceIds.length])
    }
  })

  let subject = whichDisplay === 'url' ? summary : (whichDisplay === 'copy' ? body : namedData)
  
  return (

    <div className='test'>
      {!displayActive && <ArticleSummarizer setWhichDisplay = {setWhichDisplay} setDisplayActive = {setDisplayActive} postArticle={postArticle}/>}
        {!displayActive && <PostArticle setWhichDisplay = {setWhichDisplay} setDisplayActive = {setDisplayActive} summarizePaste={summarizePaste}/>}
        {!displayActive && <Ner setWhichDisplay = {setWhichDisplay} setDisplayActive = {setDisplayActive} recognizeEntity={recognizeEntity}/>}

        {displayActive && <ArticleContainer  data = {output} summary={subject} whichDisplay = {whichDisplay}/>}

    </div>
  )
}

export default Home