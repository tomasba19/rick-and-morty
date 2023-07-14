const server = require("./app") // config de nuestro SERVER
const PORT= 3001;
const { conn } = require("./DB_connection"); // config de nuestra SYNC de ORM con la DB

server.listen(PORT, async () => {
    console.log('Server raised in port: ' + PORT);
    await conn.sync({ force: true });
})
