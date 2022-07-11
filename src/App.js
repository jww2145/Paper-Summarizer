import React, {useState, useEffect} from "react";
import ArticleSummarizer from "./Components/ArticleSummarizer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Fourohfour from "./Components/Fourohfour";
import Navbar from "./Components/Navbar"
import PostArticle from "./Components/PostArticle"




function App() {

const [summary, setSummary] = useState([])

const postArticle = (newArticle) => {
  fetch(`http://api.intellexer.com/summarize?apikey=${process.env.REACT_APP_API_KEY}&conceptsRestriction=7&returnedTopicsCount=2&summaryRestriction=9&textStreamLength=1000&url=${newArticle.url}`)
    .then(res => res.json())
    .then(newSummary => console.log(newSummary))
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
      <ArticleSummarizer summary={summary} setSummary={setSummary} postArticle={postArticle}/>
      <PostArticle />

    </div>
  );
}

export default App;
