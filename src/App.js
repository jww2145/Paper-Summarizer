import React, {useState} from "react";
import ArticleSummarizer from "./Components/ArticleSummarizer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Fourohfour from "./Components/Fourohfour";
import Navbar from "./Components/Navbar"
import ArticleContainer from "./Components/ArticleContainer";
import PostArticle from "./Components/PostArticle"
import Ner from "./Components/Ner";
import {Container} from './styles/Container.styled'
import "./styles/App.css"


function App() {
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
      .then(res => {res.json()
        setDisplayActive(true)})
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
    .then(res => {res.json()
      setDisplayActive(true)})
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
  
    return (
   <div className="originDiv">
        <h1>Research Helper</h1>
        
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Fourohfour/>} />
        </Routes>

        {!displayActive && <ArticleSummarizer setWhichDisplay = {setWhichDisplay} setDisplayActive = {setDisplayActive} postArticle={postArticle}/>}
        {!displayActive && <PostArticle setWhichDisplay = {setWhichDisplay} setDisplayActive = {setDisplayActive} summarizePaste={summarizePaste}/>}
        {!displayActive && <Ner setWhichDisplay = {setWhichDisplay} setDisplayActive = {setDisplayActive} recognizeEntity={recognizeEntity}/>}

        {displayActive && <ArticleContainer  summary={summary}/>}
    </div>
  );
}

export default App;
