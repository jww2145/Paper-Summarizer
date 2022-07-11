import React, {useState, useEffect} from "react";
import ArticleSummarizer from "./Components/ArticleSummarizer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Fourohfour from "./Components/Fourohfour";
import Navbar from "./Components/Navbar"



function App() {

const [summary, setSummary] = useState([])


const postArticle = (newArticle) => {
  fetch(`http://api.intellexer.com/[POST method]?apikey={6aa05dd9-099d-477b-8a57-3d1f405cfd5a}&options={options}`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newArticle)
    })
    .then(res => res.json())
    .then(newSummary => setSummary(newSummary))
  }



  return (
    <div className="originDiv">

      
      <Routes>

      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<Fourohfour/>} />

      </Routes>
      <h1>
        Research Helper
      </h1>
      <ArticleSummarizer summary={summary} setSummary={setSummary} postArticle={postArticle}/>

    </div>
  );
}

export default App;
