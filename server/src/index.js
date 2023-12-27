const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3001;
const db = require('./config/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
db.connect();

routes(app);


app.listen(port,() => {
    console.log('Server is running on port ' + `http://localhost:${port}`);
})