const express = require("express");
const { handleCreateUser, handleGetAllUsers } = require("../controllers/user");
const router = express.Router();

router.post("/", handleCreateUser);
router.get("/", handleGetAllUsers);

module.exports = router;