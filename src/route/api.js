import express from 'express';
import APIController from '../controller/APIController'

let router = express.Router();

const initAPIRoute = (app) => {

    router.get('/users', APIController.getAllUsers); // method GET -> Read data
    router.post('/create-user', APIController.createNewUser); // method POST -> Create data
    router.put('/update-user', APIController.updateUser); // method PUT -> Update data
    router.delete('/delete-user/:id', APIController.deleteUser); // method DELETE -> Delete data


    return app.use('/api/v1/', router) // "/" ở đây là tiền tố khi init web route

}
export default initAPIRoute;