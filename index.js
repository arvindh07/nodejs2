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

// logger route
app.use("/", (req, res, next) => {
    const date = new Date();
    const logText = date.toLocaleString() + "\t" + req.method + "\t" + req.url + "\n";
    logger(logText);
    next();
})
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

