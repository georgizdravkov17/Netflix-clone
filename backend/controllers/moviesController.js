const Movie = require("../models/Movie");
const { movieSchema } = require("../validations/MovieValidation");

const getAllMovies = async (req, res) => {
    try{
      const movies = await Movie.find();
      res.json(movies);
    } catch(err){
        res.status(500).json(err);
    }
}

const getMovieById = async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    } catch(err){
        res.status(500).json(err);
    }
}

const createMovie = async (req, res) => {

    const { title, description, imgTitle, imgSm, trailer, video, year, limit, genre } = req.body;

    try{

      const isMovieDataValid = await movieSchema.validate(req.body);

      if(!isMovieDataValid){
          res.status(401).json({message: "Invalid movie data!"});
      }  

      const newMovie = new Movie({
          title,
          description,
          imgTitle,
          imgSm,
          trailer,
          video,
          year,
          limit: limit? limit: null,
          genre
      })

      await newMovie.save();

      res.status(201).json({message: "Succesfully created movie!", movie: newMovie})


    } catch(err){
        res.status(500).json(err);
    }
}

const updateMovie = async (req, res) => {
    try{
       const updatedMovie = await Movie.updateOne({ _id: req.params.id}, req.body);
       res.status(201).json({
           message: "Successfully updated movie!",
           updatedMovie
       })
    } catch(err){
        res.status(500).json(err);
    }
}

const deleteMovie = async (req, res) => {
    try{
        const deletedMovie = await Movie.deleteOne({ _id: req.params.id});
        res.status(201).json({
            message: "Successfully deleted movie!",
            deletedMovie
        })
    } catch(err){
        res.status(500).json(err);
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}