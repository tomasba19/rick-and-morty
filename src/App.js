import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx';
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
         <NavBar onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
         
      </div>
   );
}

export default App;
