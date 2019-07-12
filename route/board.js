var express = require('express');
var db = require('../dbconnection');

var router = express.Router();

module.exports = router;
router.get('/', function(req, res) {
    db.query('SELECT p.postTitle, p.createAt, p.userNum from post p', function(err, rows) {
        if(err) {
            console.log(err);
        }
        console.log(rows);
        res.send(rows);
    })
});

module.exports = router;
