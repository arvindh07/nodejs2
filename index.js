const http = require("http");
const logger = require("./logger");
const express = require("express");
const dotenv = require("dotenv");
const { connectToDb } = require("./connection");
dotenv.config();
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 8001;

const app = express();
connectToDb().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to db and Server running on port ", PORT);
    })
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// welcome route
app.get("/", (req,res) => {
    res.send("<h1>hlo from express server!!##</h1>")
})

// user router
app.use("/api/user", userRouter);

// error 404 route
app.use("/*", (req, res) => {
    return res.send("<h1>404 not found</h1>")
})

