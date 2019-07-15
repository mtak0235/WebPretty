var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./dbconnection');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// boardRouter.use(bodyParser.urlencoded({extended:false}));

//var userRouter = require('./route/auth');
var boardRouter = require('./route/board');
var noticeRouter = require('./route/notice');

//app.use("/auth",userRouter);
app.use("/board",boardRouter);
app.use("/notice",noticeRouter);

app.use(express.static('board'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/mainPage', express.static(path.join(__dirname,'/MAIN.html')));

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.readFile(__dirname + "/mainPage/MAIN.html", (err, data) => {
        if (err) throw (err);
        res.end(data, 'utf-8');
    })
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

