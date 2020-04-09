var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '안알려줄 예정',
    user : 'newuser',
    password : '빠이',
    port : 3306,
    database : 'webpretty'
});

module.exports=connection;
