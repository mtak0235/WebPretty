var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '168.131.35.103',
    user : 'webpretty',                       
    password : 'webpretty123',
    port : 3306,
    database : 'webpretty'
});

module.exports=connection;
