import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

import './App.css';
import News from './components/News/News';
import axios from 'axios';

function App() {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=0d08dc7787d24e62a5861bdb7c5842b8'
    fetch(url)
    .then(res=>res.json())
    .then(data => console.log(data.articles))
  },[])
  useEffect(()=>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=0d08dc7787d24e62a5861bdb7c5842b8'
    axios(url) 
    .then(data => setArticles(data.data.articles))
  },[])
  return (
    <div>
      <h2>Headlines:{articles.length}</h2>
     <Button color="primary">Hello World</Button>;
     <Button color="secondary">Secondary</Button>
     {
     articles.map(article => <News article={article}></News>)
     }
    </div>
  );
}

export default App;
