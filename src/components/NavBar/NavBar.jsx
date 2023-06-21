import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About.jsx";
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar({onSearch}) {
    return(
        <div className='nav'>
            <button>
                <Link to = {'/about'}>About</Link>
            </button>
            <button>
                <Link to = {'/home'}>Home</Link>
            </button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
    
}