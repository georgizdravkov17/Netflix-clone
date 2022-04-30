const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById, deleteUser, updateUser } = require("../controllers/usersController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;