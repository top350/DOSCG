var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var controllerSequence = require('../controller/DOSCG_findSequence.controller');
var controllerMap = require('../controller/DOSCG_Map.controller');
var controllerEquation = require('../controller/DOSCG_findEquation.controller');
var app = express();
app.use(cors());

app.get('/findXYZ',controllerSequence.findXYZ );
app.get('/findBC',controllerEquation.findBC );
app.get('/findBestRoute',controllerMap.findBestRoute );



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000, () => console.log('server run listening on port 3000'));
