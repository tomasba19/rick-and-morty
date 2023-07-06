
let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character); 
    return res.status(200).json(myFavorites); 
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== id); 
    // filtro el character con el id que me llega y retorno el array nuevo

    return res.status(200).json(myFavorites);
}


module.exports = {
    postFav,
    deleteFav
};