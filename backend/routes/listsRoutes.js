const express = require("express");
const router = express.Router();
const { getAllLists, getListById, createList ,deleteList, updateList } = require("../controllers/listsController.js");

router.get("/", getAllLists);
router.get("/:id", getListById);
router.put("/:id", updateList);
router.delete("/:id", deleteList);
router.post("/", createList);

module.exports = router;