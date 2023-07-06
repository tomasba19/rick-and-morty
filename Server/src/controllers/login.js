const users = require('../utils/users')

const login =( req, res) => {
    const { email, password } = req.query;

    //verifico si existe un usuario con el mail y la constrasenia proporcionada
    const userFound = users.find((user) => user.email === email && user.password === password);

    return userFound
    ? res.status(200).json({access: true}) //usuario valido
    : res.status(404).json({access: false})//usuario invalido
}



module.exports = {
    login
};