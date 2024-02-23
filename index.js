const logger = require("./logger");
const express = require("express");
const dotenv = require("dotenv");
const { connectToDb } = require("./connection");
dotenv.config();
const userRouter = require("./routes/user");
const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const PORT = process.env.PORT || 8001;

const app = express();
connectToDb().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to db and Server running on port ", PORT);
    })
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static("public"));

// logger route
app.use("/", (req, res, next) => {
    const date = new Date();
    const logText = date.toLocaleString() + "\t" + req.method + "\t" + req.url + "\n";
    logger(logText);
    next();
})
// static pages router
app.use("/", staticRouter);
// user router
app.use("/api/user", userRouter);
// url router
app.use("/url", urlRouter);
// static router


// error 404 route
app.use("/*", (req, res) => {
    return res.send("<h1>404 not found</h1>")
})

