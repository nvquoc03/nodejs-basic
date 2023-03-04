import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {

    router.get('/', homeController.getHomePage)

    router.get('/about', (req, res) => {
        res.send(`I'm VanQuoc`)
    })

    return app.use('/', router) // "/" ở đây là tiền tố khi init web route

}
module.exports = initWebRoute;