var createError = require('http-errors');
var express = require('express');
var path = require('path');
var db = require('./dbconnection');
var fs = require('fs');

var app = express();

//var userRouter = require('./route/auth');
var boardRouter = require('./route/board');

app.set('port', process.env.PORT || 3000);

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

//app.use("/auth",userRouter);
app.use("/board",boardRouter);
//app.use(logger('dev'));

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.readFile(__dirname + "/mainPage/MAIN.html", (err, data) => {
        if (err) throw (err);
        res.end(data, 'utf-8');
    })
});
app.listen(app.get('port'), function () {
    console.log('Express server listening on port' + app.get('port'))
})

//module.exports = app;

app.get('/user', function(req, res){
    
    db.query('SELECT * from user', function(err, rows) {
        if(err){
            console.log(err);
        }
        console.log('The solution is:', rows);
        res.send(rows);
    });
});


