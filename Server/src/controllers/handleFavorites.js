const { User, Favorite } = require("../DB_connection")

//let myFavorites = [];

const postFav = async (req, res) => {
    try {
        const { id, status, name, species, origin, image, gender } = req.body;

        if (id === "RELOAD") {
            const favorites = await Favorite.findAll();
            return res.status(200).json(favorites);
          }
      
          if (!id || !name || !image) {
            return res
              .status(404)
              .json({ message: "error, not found create fav" });
          }
          const character = {
            id,
            status,
            name,
            species,
            origin: origin?.name,
            image,
            gender,
          };
          
          const newChar = await Favorite.create(character);
      
          const favorites = await Favorite.findAll();
          res.status(200).json(favorites);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
    const char = await Favorite.findByPk(id);
    if (char) {
      await Favorite.destroy({
        where: {
          id,
        },
      });
      const favorites = await Favorite.findAll();
      res.status(200).json(favorites);
    } else {
      res
        .status(500)
        .json({ message: "el character ya ha sido eliminado" });
    }
        
    } catch (error) {
        res.status(500).json({ message: error });
    }
    
}


module.exports = {
    postFav,
    deleteFav
};