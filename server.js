// Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./backend/routes');

const app = express();
const router = express.Router();

require('dotenv').config();

// Serve static pages
app.use(express.static(__dirname +'/dist/truckrTech'));

// setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use express backend routes
routes(router);

// Add API Routes 
app.use('/api', router);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/truckrTech/index.html'))
});

const port = process.env.PORT || 8080;

// start the app by using heroku port
app.listen(port);
console.log('App started on port: ' + port);