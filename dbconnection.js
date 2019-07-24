var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '168.131.35.103',
    user : 'newuser',
    password : '980208',
    port : 3306,
    database : 'webpretty'
});

module.exports=connection;
