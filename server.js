
// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve static pages
app.use(express.static(__dirname +'/dist/truckrTech'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/truckrTech/index.html'))
});

// start the app by using heroku port
app.listen(process.env.PORT || 8080);