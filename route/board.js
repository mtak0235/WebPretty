var express = require('express');
var db = require('../dbconnection');

var router = express.Router();

router.get('/list', function(req, res) {
    res.redirect('/board/1')
});

router.get('/list/:page', function(req, res, next) {

    db.query('select postId,postTitle,userNum,hit,DATE_FORMAT(createAt, "%Y/%m/%d %T") as createAt from post', function (err,rows) {
        if (err) throw (err);
        console.log('rows: '+ rows);
        res.render('list', {title: 'Board List', rows: rows});
    }); 
});

module.exports = router;
