import { useState } from 'react';
import './App.css';
import React from 'react';
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar.jsx';
import axios from 'axios';

function App() {
   const[characters, setCharacters] = useState([]);
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      const newCharacters = characters.filter((character)=> character.id !== Number(id));
      setCharacters(newCharacters);
   }
   
   return (
   
      <div className='App'>
         <div className="pickle">
               <a href="https://www.youtube.com/watch?v=ML5UI-0JS_Q" target="_blank" rel="noopener noreferrer">
               <button>I'M PICKLE RICK!</button>
               </a>
         </div>
         <div className="titulo">Rick And Morty</div>
            <div className='search'><NavBar onSearch={onSearch}/></div>
               <div className='characters'><Cards characters={characters} onClose={onClose} /></div>
         
      </div>
   );
}

export default App;
