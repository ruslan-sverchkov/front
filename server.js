const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === '/index.css') {
        const index_css = fs.readFileSync('index.css', 'utf8');
        res.end(index_css);
    } else {
        const index = fs.readFileSync('index.html', 'utf8');
        res.end(index);
    }
});

server.listen(process.env.PORT || 8080);
console.log('Server started!');