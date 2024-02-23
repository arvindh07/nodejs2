const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const checkUserAuth = require("../middlewares/auth");
const { verifyToken } = require("../utils/token");

router.get("/", verifyToken ,async (req,res) => {
    const allUrls = await URL.find({ user: req.user.id });
    res.render("Homepage", {
        allUrls
    })
})

router.get("/login", async (req,res) => {
    res.render("Login")
})

router.get("/signup", async (req,res) => {
    res.render("Signup")
})

module.exports = router;