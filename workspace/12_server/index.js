// const http = require('http'); //오래된버전
// // import http from 'http'   //es6(2015년도 버전)
// const fs =require('fs') //파일을 읽을 수 있는 모듈

// const server = http.createServer(function(request,response){
//     // response.writeHead(200)
//     // response.write('<h1>Hello Node<h1>');
//     // response.write('<p>END</p>');
//     fs.readFile('./index.html', function(err,data){
//         response.writeHead(200)
//         response.end(data)
//     })
// })


// server.on('request', function(code){
//     console.log('request 이벤트')
// })

// server.on('connection',function(code){
//     console.log('connection 이벤트')
// })
// server.listen(8080, function(){
//     console.log('8080포트 서버 실행')
// })

//강사님 코드
const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res) {
    // res.writeHead(200)
    // res.write('<h1>Hello Node</h1><div>HI</div>');
    // res.end('<p>END</p>')
    fs.readFile('./index.html', function(err, data) {
        res.writeHead(200)
        res.end(data)
    })
})
server.on('request', function(code) {
    console.log('request 이벤트')
})
server.on('connection', function(code) {
    console.log('connection 이벤트')
})
server.listen(8080, function() {
    console.log('8080포트 서버 실행')
})