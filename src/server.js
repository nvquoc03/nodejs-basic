
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();
var morgan = require('morgan');


const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => { //Khi request hợp lệ thì chạy hàm next
    console.log('>>>Run into my middleware');
    console.log(req.method);

    next();

})

app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));//-> Giúp gửi data từ Client lên Server và cs thể lấy data 1 cách đơn giản
app.use(express.json()); //-> Giúp gửi data từ Client lên Server và cs thể lấy data 1 cách đơn giản

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

//init api route
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

