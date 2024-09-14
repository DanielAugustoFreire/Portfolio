import express from 'express';
import HomeController from '../controllers/homeController.js'

const router = express.Router();
const ctrl = new HomeController();

router.get(`/`, (req,res) => {
    // #swagger.tags = ['Home']
    // #swagger.summary = 'Endpoint para a home do site'
    ctrl.home(req,res);
})

export default router;