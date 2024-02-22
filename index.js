const http = require("http");
const logger = require("./logger");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8001;

const app = express();

app.get("/", (req,res) => {
    res.send("<h1>hlo from express server!!##</h1>")
})
// error 404 route
app.use("/*", (req, res) => {
    return res.send("<h1>404 not found</h1>")
})

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})