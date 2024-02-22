const http = require("http");
const PORT = 8000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    return res.end("<h1>hello from server!!</h1>");
})

server.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})