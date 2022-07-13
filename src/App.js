import React, {useState} from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Fourohfour from "./Components/Fourohfour";
import Navbar from "./Components/Navbar"
import "./styles/App.css"


function App() {
  const [summary, setSummary] = useState([])
  const [namedData, setNamedData] = useState([])
  const [body, setBody] = useState([])
  const [displayActive,setDisplayActive] = useState(false)
  const [whichDisplay, setWhichDisplay] = useState('')

 
    return (
   <div className="originDiv">
        <h1>Research Helper</h1>
        <h2>Welcome to Research Helper! The best place to summarize articles and links!</h2>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Fourohfour/>} />
        </Routes>

    </div>
  );
}

export default App;
