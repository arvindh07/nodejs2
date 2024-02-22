const express = require("express");
const { handleCreateUser } = require("../controllers/user");
const router = express.Router();

router.post("/", handleCreateUser);

module.exports = router;