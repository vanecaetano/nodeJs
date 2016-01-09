var express = require('express');
var app = express();
var port = 5000;

app.use(express.static('public'))
app.use(express.static('src/views'))

app.get('/hi', function(req,resp){
   resp.send('hello world'); 
});

app.listen(port, function(err){
    console.log('Listening server on port' + port);
});