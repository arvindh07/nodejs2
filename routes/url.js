const express = require("express");
const { handleCreateShortUrl, handleRedirectUrl } = require("../controllers/url");

const router = express.Router();

router.post("/", handleCreateShortUrl);
router.get("/:id", handleRedirectUrl);

module.exports = router;