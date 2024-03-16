const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");
const {Server} = require("socket.io");
const io = new Server(server);

// add public
app.use(express.static(path.resolve("./public")));

// app for handling routes
app.get("/", (req, res) => {
    return res.sendFile("/public/client.html", {root: __dirname});
})

// websocket
io.on("connection", (socket) => {
    socket.on("message", (msg) => {
        // console.log("Message from client -> ", msg);
        io.emit("testMsg", msg);
    })
    socket.emit("testMsg", "test server msg");

    // broadcast
    // io.emit("broadcast", "Welcome to my channel");
})

// http server
server.listen(8000, () => {
    console.log("Server running on port 8000");
});