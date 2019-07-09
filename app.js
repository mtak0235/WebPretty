var express = require('express');
var db = require('./dbconnection');

var app = express();

var userRouter = require('./route/auth');
var boardRouter = require('./route/board');

app.use("/auth",userRouter);
app.use("/board",boardRouter);

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send('root');
});

app.get('/user', function(req, res){
    
    db.query('SELECT * from user', function(err, rows) {
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

// test for issue commit
