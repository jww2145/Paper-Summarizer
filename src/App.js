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
import Ner from "./Components/Ner";
import PieChart from "./Components/PieChart"
import { Chart } from "react-google-charts";


import {Container} from './styles/Container.styled'
import "./styles/App.css"


function App() {
  const [summary, setSummary] = useState([])
  const [body, setBody] = useState([])
  const [urlOrText, setUrlOrText] = useState(true)
  const [namedData, setNamedData] = useState([])


  const urlOrCopy = urlOrText ? summary : body

  const postArticle = (newArticle) => {
    fetch(`http://api.intellexer.com/summarize?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestrictions=7&summaryRestriction=7&url=${newArticle.url}`)
      .then(res => res.json())
      .then(newSummary => {
        if(newSummary.items){
          setSummary(newSummary.items)
          setUrlOrText(true)
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
          setUrlOrText(false)
        }
      })
  }


  const recognizeEntity = (newEntity) => {
    fetch(`https://api.intellexer.com/recognizeNe?apikey=${process.env.REACT_APP_API_KEY}&loadNamedEntities=true&url=${newEntity.ner}`)
    .then(res => res.json())
    .then(reData => {
      if(reData.entities){
        setNamedData(reData.entities)
      }
    })
  }

  let output = [['Entities', 'Appearances']]

  console.log(namedData)
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

        <Container>
          <ArticleSummarizer id = 'articleSummarizer'postArticle={postArticle}/>
          <ArticleContainer summarizedText = {urlOrCopy}/>
        </Container>

        <PostArticle id = 'postArticle' body={body} setBody={setBody} summarizePaste={summarizePaste}/>

      <PostArticle body={body} setBody={setBody} summarizePaste={summarizePaste}/>
        <Container>
          <Ner recognizeEntity={recognizeEntity}/>
          <PieChart data = {output}/>
        </Container>
      <ArticleContainer summarizedText = {urlOrCopy}/>
    </div>
  );
}

export default App;
