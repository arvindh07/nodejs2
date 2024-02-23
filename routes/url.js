const express = require("express");
const { handleCreateShortUrl, handleRedirectUrl, handleGetAllUrls, handleDeleteUrl, handleGetAnalytics} = require("../controllers/url");

const router = express.Router();

router.route("/")
    .get(handleGetAllUrls)
    .post(handleCreateShortUrl);

router.route("/:id")
    .get(handleRedirectUrl)
    .delete(handleDeleteUrl)

router.get("/analytics/:id", handleGetAnalytics);

module.exports = router;