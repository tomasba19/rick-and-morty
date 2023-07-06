const express = require('express')
const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"


const getCharById = (req, res) => {
    const { id }= req.params;

    axios.get(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender}) => {
        if(name){
            const character = { 
                id,
                status, 
                name, 
                species, 
                origin, 
                image, 
                gender
            }
            return res.status(200).json(character)
        }
        return res.status(404).send('Not found');
    })
    .catch(error => res.status(500).send(error.message) )
}


module.exports = {
    getCharById
};
























/*
const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(({name, gender, species, origin, image, status}) => {
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        return res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch(error =>{
        return res
                .writeHead(500, {"Content-type": "text/plain"})
                .end(error.message)
    })

}

module.export = {
    getCharById
};
*/