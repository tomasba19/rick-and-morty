import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About.jsx";
import './NavBar.css';
import { Link, useNavigate} from 'react-router-dom';

export default function NavBar({onSearch, setAccess}) {
    const navigate = useNavigate();
    const handleLogOut = () =>{
        setAccess(false);
        navigate('/');
    }
    
    return(
        <div className='nav'>
            <div className="pickle">
               <a href="https://www.youtube.com/watch?v=ML5UI-0JS_Q" target="_blank" rel="noopener noreferrer">
               <button>I'M PICKLE RICK!</button>
               </a>    
            </div>
            <div className='buttons'>
            <button className='about'>
                <Link to = {'/about'}>About</Link>
            </button>
            <button className='home'>
                <Link to = {'/home'}>Home</Link>
            </button>
            <button className='favorites'>
                <Link to = {'/favorites'}>Favorites</Link>
            </button>
            
            <button className='logout' onClick={handleLogOut}>Log Out</button>
            </div>
            <SearchBar onSearch={onSearch}/>
            
        </div>
    )
    
}