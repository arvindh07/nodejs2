const express = require("express");
const router = express.Router();
const URL = require("../models/url");

router.get("/", async (req,res) => {
    const allUrls = await URL.find();
    res.render("Homepage", {
        allUrls
    })
})

// router.post("/url", )

module.exports = router;