import React, { useState } from "react";
import './Form.css'
import validation from "../Validation/Validation";

export default function Form({ login }){
 const [userData, setUserData] = useState({
    email: '',
    password: ''
 })
 const [errors, setErrors] = useState({});

 const handleOnChange = (event) => {
    setUserData({
        ...userData, 
        [event.target.name]: event.target.value 
    })

    setErrors(validation({
        ...userData, 
        [event.target.name]: event.target.value
    }))
 }



 const handleOnSubmit = (event) =>{
    event.preventDefault();
    login(userData);
 }


    return(
        <form onSubmit={handleOnSubmit}>
            <div className="titulo">Rick And Morty</div>
            
            <label htmlFor="email">Email: </label>
            <input name="email" type="email" placeholder="Your email adress"
            value={userData.email} onChange={handleOnChange}/>
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

            <br />
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" placeholder="Your password"
            value={userData.password} onChange={handleOnChange}/>
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            <br />
            <button disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit</button>
        </form>
    )
}