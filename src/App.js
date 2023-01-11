import React, {useState} from 'react';
import './App.css';
import ListGift from './components/ListGift';
import {Link, Route} from "wouter.js"; 



function App() {
  const [keyword, setkeyword] = useState('perro')

  return (
    <section className="App">
    
      <div className="App-container">
        <Route component={ListGift} path='/gift:keyword'  />
        <Link to='/gift/Argentina'>  Gif de Argentina</Link>
        <Link to='/gift/Panda'>Gif de Pandas</Link>
        <Link to='/gift/Gimnasio'> Gif de Gimnasio</Link>
      </div>
    </section>
  );
}

export default App;
