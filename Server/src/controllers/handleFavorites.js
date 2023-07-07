
let myFavorites = [];

const postFav = (req, res) => {
    try {
        const character = req.body;
        const characterFound = myFavorites.find(fav => fav.id === character.id);

        if(characterFound) throw Error('Ya fue agregado a favoritos')

            myFavorites.push(character);
            return res.status(200).json(myFavorites);

    } catch (error) {
        res.status(404).send(error.message)
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id); 
    // filtro el character con el id que me llega y retorno el array nuevo

    return res.status(200).json(myFavorites);
}


module.exports = {
    postFav,
    deleteFav
};