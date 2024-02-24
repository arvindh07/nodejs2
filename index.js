const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
const upload = multer({ dest: 'uploads/', storage })

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
    res.render("Home.ejs");
})

app.post("/upload", upload.single('profilePic'), (req, res) => {
    console.log("req -> ", req.file);
    return res.redirect("/");
})

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})