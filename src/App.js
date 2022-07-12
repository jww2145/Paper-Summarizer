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




function App() {

const [summary, setSummary] = useState([])



const postArticle = (newArticle) => {
  fetch(`http://api.intellexer.com/summarize?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestrictions=7&summaryRestriction=7&url=${newArticle.url}`)
    .then(res => res.json())
    .then(newSummary => {
      if(newSummary.items){
        console.log(newSummary.items);
        setSummary(newSummary.items)
        setUrl(true)
      }
    })
  }

  const [body, setBody] = useState([])

  const summarizePaste = (body) => {
      fetch(`https://api.intellexer.com/summarizeText?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestriction=7&returnedTopicsCount=2&summaryRestriction=7&textStreamLength=1000`,{
          method: 'POST',
          body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(data => {
        if(data.items){
          setBody(data.items)
          setUrl(false)
        }
      })
  }


 const [url, setUrl] = useState(true)

 const urlOrCopy = url ? summary : body


const [namedData, setNamedData] = useState([])
 
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
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<Fourohfour/>} />

      </Routes>
      <h1>
        Research Helper
      </h1>
      <ArticleSummarizer  postArticle={postArticle}/>

      <PostArticle body={body} setBody={setBody} summarizePaste={summarizePaste}/>
      <Ner recognizeEntity={recognizeEntity}/>
      <ArticleContainer summarizedText = {urlOrCopy}/>
    </div>
  );
}
{/*  */}

export default App;
