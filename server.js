import express from 'express';
import homeRoute from './routes/homeRoute.js';
import projetoRoute from './routes/projetoRoute.js'
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import swaggerUi from 'swagger-ui-express'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout', './layout'); // Usando aspas simples

app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson))
app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', homeRoute);
app.use('/projects', projetoRoute);
 
const porta = 5000;

app.listen(porta, function() {
    console.log(`Servidor rodando na porta ${porta}`);
});
