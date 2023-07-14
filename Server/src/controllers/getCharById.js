const express = require('express')
const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const EMAIL_USER = "tomi@gmail.com";
const PASSWORD_USER = "tomi123";

const login = function (req, res) {
    const { password, email } = req.query;
    if (!password || !email) {
      //TODO: TESTING <-> fix error to -> .json({ access: false })
      return res.status(400).json({ access: false });
    }
    if (password === PASSWORD_USER && email === EMAIL_USER) {
      res.status(200).json({ access: true });
    } else {
      //TODO: TESTING <-> fix error to -> .json({ access: false })
      res.status(200).json({ access: false });
    }
  };

const getCharById = async (req, res) => {
    try {
        const { id }= req.params;
        const { data } = await axios(`${URL}/${id}`)

        if(!data.name) throw new Error(`ID: ${id} Not found`)
       
        const character = { 
            id: data.id,
            status: data.status, 
            name: data.name, 
            species: data.species, 
            origin: data.origin, 
            image: data.image, 
            gender: data.gender
        }
        return res.status(200).json(character)
        
    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
}


module.exports = {
    getCharById,
    login,
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