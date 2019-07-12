var express = require('express');
var db = require('../dbconnection');

var router = express.Router();

module.exports = router;

router.get('/board', function(req, res) {