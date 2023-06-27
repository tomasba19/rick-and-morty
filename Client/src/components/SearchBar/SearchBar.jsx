import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }


   return (
      <div className="search">
         <input type='search'
                onChange={handleChange}
                value={id}
                placeholder="Search by ID"
         />
         <button onClick={() =>{onSearch(id); setId('')}}>Search!</button> 
      </div>
      
   );
}
