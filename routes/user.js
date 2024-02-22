const express = require("express");
const { handleCreateUser, handleGetAllUsers, handleUpdateUser, handleDeleteUser } = require("../controllers/user");
const router = express.Router();

router.post("/", handleCreateUser);
router.get("/", handleGetAllUsers);
router.patch("/:id", handleUpdateUser);
router.delete("/:id", handleDeleteUser);

module.exports = router;