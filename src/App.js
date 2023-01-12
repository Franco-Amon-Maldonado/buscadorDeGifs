import React from 'react';
import './App.css';
import ShowGif from './components/ShowGif';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';

function App() {

  return (

    <Router>
      <section className="App">
        <div className="App-container">
          <Routes>
            { /* Se utiliza path completo porque "element"
                no puede leer valores en rutas anidadas
                conservando la ruta principal */ }
            <Route path="gif/:keyword" element={<ShowGif />} />
          </Routes>
          <Link to='/gif/Argentina'>Gif de Argentina</Link>
          <Link to='/gif/Panda'>Gif de Pandas</Link>
          <Link to='/gif/Gimnasio'> Gif de Gimnasio</Link> 
        </div>
      </section>
    </Router>
    
  );
}

export default App;
