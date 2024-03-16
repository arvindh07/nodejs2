const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.status(200).end("<h1>Hello from websocket app</h1>");
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
});