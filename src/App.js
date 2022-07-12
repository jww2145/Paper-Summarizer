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
          console.log(data.items)
          setBody(data.items)
          setUrl(false)
        }
      })
  }
  
 console.log(body)

 const [url, setUrl] = useState(true)

 const urlOrCopy = url ? summary : body



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
      <ArticleContainer summarizedText = {urlOrCopy}/>
    </div>
  );
}
{/*  */}

export default App;
