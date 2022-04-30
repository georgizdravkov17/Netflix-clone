const express = require("express");
const router = express.Router();
const { getAllMovies, getMovieById, createMovie ,deleteMovie, updateMovie } = require("../controllers/moviesController");

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.post("/", createMovie);

module.exports = router;