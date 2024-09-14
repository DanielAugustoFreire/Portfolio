import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "PFS2 - API",
        description: "API criada utilizando o padrão REST na disciplina de Programação Fullstack 2"
    },
    host: 'localhost:5000',
    components: {
       /*  schemas: {
            usuarioModel: new UsuarioModel(0, "fulano@email.com", "Fulano", 1, "12345", new PerfilModel(1, "Administrador")).toJSON(),
            perfilModel: new PerfilModel(1, "Administrador").toJSON()
        },*/
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
}

const outputJson = "./swagger-output.json";
const routes = ['./server.js']

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then( async () => {
    await import('./server.js');
})