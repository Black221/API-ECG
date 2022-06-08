//Env variable and db config
require('dotenv').config({path: './config/.env'});
require('./config/db');

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

//Some middleware..
app.use(bodyParser.json());
app.use(cors());


//Routes
const ECGRoutes = require('./routes/ECG.route');
const dataSetRoutes = require('./routes/dataSet.route');

app.use('/api/ecg', ECGRoutes);
app.use('/api/dataset', dataSetRoutes);

//app GET
app.get('/', (req, res) => {
    res.send('Welcome');
})


app.listen(process.env.PORT, (err) => {
    if (!err)
        console.log("Connected at : http://localhost:"+process.env.PORT);
    else
        console.log("No connected :", err);
})