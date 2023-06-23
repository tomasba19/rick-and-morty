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
            <button>
                <Link to = {'/about'}>About</Link>
            </button>
            <button>
                <Link to = {'/home'}>Home</Link>
            </button>
            <button>
                <Link to = {'/favorites'}>Favorites</Link>
            </button>
            <button onClick={handleLogOut}>Log Out</button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
    
}