import express from 'express';
import ProjetoControoler from '../controllers/projetosController.js';

let router = express.Router();
let ctrl = new ProjetoControoler();

router.get("/", ctrl.default)

export default router;