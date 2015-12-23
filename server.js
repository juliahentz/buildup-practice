var express = require('express');

var app = express();

app.get('/', function(req, res){

    res.send('This is the root route');

});

app.get('/about', function(req,res){

   res.send('This is the about page');

});


app.listen(3000, function(){

   console.log('Server is up and running');

});