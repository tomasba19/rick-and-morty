const app = require('../src/app')
const session = require('supertest')
const request = session(app)

const character= {
    id: 950,
    name: 'Tomi',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
        name: 'Earth (C-137)'
    },
    image: 'image.jpg'
};


describe("test de RUTAS", ()=> {
    describe("GET /rickandmorty/character/:id", () =>{
        it("Responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        })
        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", 
        async () => {
            const response = await request.get('/rickandmorty/character/1');
            for(const prop in character){
                expect(response.body).toHaveProperty(prop)
            };
        });
        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/12423j');
            expect(response.statusCode).toBe(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        const access = { access: true };
        it("Responde con un objeto con la propiedad access en true si la informacion del usuario es valida", async()=>{
            const response = await request.get('/rickandmorty/login?email=tomi@gmail.com&&password=tomi123')
            expect(response.body).toEqual(access);
        })
        it("Responde con un objeto con la propiedad access en false si la informacion del usuario es valida", async()=>{
            const response = await request.get('/rickandmorty/login?email=to3mi@gmail.com&&password=tomi2123')
            access.access = false ;
            expect(response.body).toEqual(access);
        })
    });
    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character);

        });

        it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
            character.id = 1293;
            character.name = 'Carlos'

            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        })
    });
    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async () =>{
            const response = await request.delete('/rickandmorty/fav/2');
            expect(response.body.length).toBe(2);
        });

        it("Si el ID enviado existe, deberia eliminarlo de favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/1293');
            expect(response.body.length).toBe(1);
        })
    })
})