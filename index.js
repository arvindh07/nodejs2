const http = require("http");
const logger = require("./logger");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8001;

const app = express();

app.get("/", (req,res) => {
    res.end("<h1>hlo from express server!!##</h1>")
})

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})