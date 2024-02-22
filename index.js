const http = require("http");
const logger = require("./logger");
const PORT = 8000;

const server = http.createServer((req, res) => {
    if(!req.url.includes("favicon")){
        const date = new Date();
        const logText = date.toUTCString() + "\t" + req.method + "\t" + req.url + "\n";
        logger(logText);
    }
    if(req.url === "/"){
        return res.end("<h1>Home page</h1>");
    }else if(req.url === "/about"){
        return res.end("<h1>About page</h1>");
    } else{
        return res.end("<h1>404 not found</h1>");
    }
})

server.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})