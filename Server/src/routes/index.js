const { getCharById, login } = require ("../controllers/getCharById");
const { postFav, deleteFav } = require('../controllers/handleFavorites');


const router = require('express').Router();

router.get('/character/:id',async (req, res) =>{await getCharById(req, res)});
router.get('/login',async (req, res) =>  {await login(req, res)});
router.post('/login',async (req, res) =>  {await login(req, res)});
router.post('/fav',async (req, res) =>  {await postFav(req, res)});
router.delete('/fav/:id',async (req, res) =>  {await deleteFav(req, res)});


module.exports = router