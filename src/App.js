import React, {useState, useEffect} from "react";
import ArticleSummarizer from "./Components/ArticleSummarizer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Fourohfour from "./Components/Fourohfour";
import Navbar from "./Components/Navbar"
import ArticleContainer from "./Components/ArticleContainer";
import PasteText from "./Components/PasteText";
import PostArticle from "./Components/PostArticle"
import Ner from "./Ner";
import {Container} from './styles/Container.styled'
import "./styles/App.css"
import TextContainer from "./Components/TextContainer";


function App() {
  const [summary, setSummary] = useState([])
  
 // const [urlOrText, setUrlOrText] = useState(true)

  const postArticle = (newArticle) => {
    fetch(`http://api.intellexer.com/summarize?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestrictions=7&summaryRestriction=7&url=${newArticle.url}`)
      .then(res => res.json())
      .then(newSummary => {
        if(newSummary.items){
          setSummary(newSummary.items)
          //setUrlOrText(true)
        }
      })
    }

    const [body, setBody] = useState([])

  const summarizePaste = (article) => {
      fetch(`https://api.intellexer.com/summarizeText?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestriction=7&returnedTopicsCount=2&summaryRestriction=7&textStreamLength=1000`,{
          method: 'POST',
          body: JSON.stringify(article)
      })
      .then(res => res.json())
      .then(data => {
        if(data.items){
          setBody(data.items)
          //setUrlOrText(false)
        }
      })
  }
  const [namedData, setNamedData] = useState([])

  // const urlOrCopy = urlOrText ? summary : body

  const recognizeEntity = (newEntity) => {
    console.log(newEntity)
    fetch(`https://api.intellexer.com/recognizeNe?apikey=${process.env.REACT_APP_API_KEY}&loadNamedEntities=true&loadRelationsTree=true&loadSentences=true&url=${newEntity.ner}`)
    .then(res => res.json())
    .then(reData => {
      if(reData.items){
        setNamedData(reData)
      }
    })
  }

    return (
   <div className="originDiv">
        <h1>Research Helper</h1>
        
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Fourohfour/>} />
        </Routes>

        <Container>
          <ArticleSummarizer id = 'articleSummarizer'postArticle={postArticle}/>
          <ArticleContainer  /*summarizedText = {urlOrCopy}*/ summary={summary}/>
        </Container>

        <PostArticle id = 'postArticle' body={body} setBody={setBody} summarizePaste={summarizePaste}/>
        <TextContainer body={body}/>

      <Ner recognizeEntity={recognizeEntity}/>
      
    </div>
  );
}

export default App;
