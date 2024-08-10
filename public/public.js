// Impor modul http
const http = require('http');

// Buat server
const server = http.createServer((req, res) => {
    // Atur header respon
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Tulis "Hello, World!" sebagai respon
    res.end('Hello, World!\n');
});

// Tentukan port server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
