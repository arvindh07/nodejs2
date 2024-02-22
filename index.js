const http = require("http");
const logger = require("./logger");
const PORT = 8000;

const server = http.createServer((req, res) => {
    const date = new Date();
    const logText = date.toUTCString() + "\t" + req.method + "\t" + req.url + "\n";
    logger(logText);
    return res.end("<h1>hello from server!!</h1>");
})

server.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})