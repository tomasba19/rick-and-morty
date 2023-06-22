import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import React from 'react';
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';

import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';

const email = 'tomi@gmail.com';
const password = 'tomi123';

function App() {
   const[characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
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
         {location.pathname !== '/' ? <NavBar onSearch={onSearch} /> : null}
         <div className="pickle">
               <a href="https://www.youtube.com/watch?v=ML5UI-0JS_Q" target="_blank" rel="noopener noreferrer">
               <button>I'M PICKLE RICK!</button>
               </a>    
         </div>
         
            <Routes>
               <Route path={'/'} element={<Form login={login} />}/>
               <Route path={'/Home'} element={<Cards characters={characters} onClose={onClose} />}/>
               <Route path={'/About'} element={<About/>}/>
               <Route path={'/Detail/:id'} element={<Detail/>}/>
            </Routes>
      </div>
   );
}

export default App;
