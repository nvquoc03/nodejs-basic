
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));//-> Giúp gửi data từ Client lên Server và cs thể lấy data 1 cách đơn giản
app.use(express.json()); //-> Giúp gửi data từ Client lên Server và cs thể lấy data 1 cách đơn giản

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

//init api route
initAPIRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

