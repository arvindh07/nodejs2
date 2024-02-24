const express = require("express");
const { handleCreateShortUrl, handleRedirectUrl, handleGetAllUrls, handleDeleteUrl, handleGetAnalytics} = require("../controllers/url");
const { restrictTo } = require("../middlewares/authorization");

const router = express.Router();

router.route("/")
    .get(handleGetAllUrls)
    .post(handleCreateShortUrl);

router.route("/:id")
    .get(handleRedirectUrl)
    .delete(handleDeleteUrl)

router.get("/admin/analytics", restrictTo(["ADMIN"]) ,handleGetAnalytics);

module.exports = router;