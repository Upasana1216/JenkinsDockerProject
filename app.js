const http = require('http')

http.createServer((req, res) => {
    res.write("Hello from Jenkins Docker World !!");
    res.end();
}).listen(3000)