var http = require('http');
var server= http.createServer();

var port = 200;
server.listen(port, function(){
    console.log('웹서버가 실행되었습니다.'+port);
});
