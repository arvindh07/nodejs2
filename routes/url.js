const express = require("express");
const { handleCreateShortUrl, handleRedirectUrl, handleGetAllUrls, handleDeleteUrl } = require("../controllers/url");

const router = express.Router();

router.route("/")
    .get(handleGetAllUrls)
    .post(handleCreateShortUrl);

router.route("/:id")
    .get(handleRedirectUrl)
    .delete(handleDeleteUrl)

module.exports = router;