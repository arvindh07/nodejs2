const express = require("express");
const router = express.Router();
const URL = require("../models/url");

router.get("/", async (req,res) => {
    const allUrls = await URL.find();
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