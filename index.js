var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '168.131.35.103',
    user : 'webpretty',                       
    password : 'webpretty123',
    port : 3306,
    database : 'webpretty'
});

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send('root');
});

app.get('/user', function(req, res){
    
    connection.query('SELECT * from user', function(err, rows) {
        if(err){
            console.log(err);
        }
        console.log('The solution is:', rows);
        res.send(rows);
    });
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port' + app.get('port'))
})
