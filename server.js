var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// viewed at h  ttp://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname + '/resume.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});



app.listen(8080);
