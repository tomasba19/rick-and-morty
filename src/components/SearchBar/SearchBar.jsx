import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }


   return (
      <div className="search">
         <div className="pickle">
               <a href="https://www.youtube.com/watch?v=ML5UI-0JS_Q" target="_blank" rel="noopener noreferrer">
               <button>I'M PICKLE RICK!</button>
               </a>
         </div>
         <input type='search'
                onChange={handleChange}
                value={id}
                placeholder="Search by ID"
         />
         <button onClick={() =>{onSearch(id); setId('')}}>Search!</button> 
      </div>
      
   );
}
