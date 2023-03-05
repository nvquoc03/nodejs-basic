
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './services/web';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

