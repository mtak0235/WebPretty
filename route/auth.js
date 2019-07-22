var express = require('express');
var db = require('../dbconnection');
var ejs = require('ejs');
var fs = require('fs');

var router = express.Router();

//회원가입
router.get('/join', function(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.readFile("./sign_up/SIGN_UP.html", (err, data) => {
        if (err) throw (err);
        res.end(data, 'utf-8');
    });
});

router.post('/join', function(req, res, next) {
    var body = req.body;
    var name = req.body.name;
    var id = req.body.id;
    var password = req.body.pw;
    var email = req.body.email;
    var phone = req.body.phone;
    var nickname = req.body.nickname;
    var interest = req.body.genre;

    db.query('insert into user (No, userPassword, userName, userEmail, userPhone, userNickname, interest) values(?, ?, ?, ?, ?, ?, ?)', [id, password, name, email, phone, nickname, interest], function(err, rows) {
        if (err) {
            console.log(err)};
        console.log("rows :" + rows);
        res.redirect('/');
    });
});

//로그인
router.get('/login', function(req, res) {
    res.render('SIGN_IN');
});

router.post('/login', function(req, res) {
    var userId = req.body.id;
    db.query('select userId, userPassword from user where userId = ?', [userId], function(err, rows) {
        if (err) throw(err);
        console.log(userId + "로그인");
        res.render('SIGN_IN', {rows: rows});
        res.redirect('/');
    })
})

module.exports = router;