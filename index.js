const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");

// add public
app.use(express.static(path.resolve("./public")));

// app for handling routes
app.get("/", (req, res) => {
    return res.sendFile("/public/client.html", {root: __dirname});
})

// http server
server.listen(8000, () => {
    console.log("Server running on port 8000");
});