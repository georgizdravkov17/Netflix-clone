const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true,
      unique: true
  },
  description: {
      type: String,
      required: true
  },
  imgTitle: {
      type: String,
      required: true
  },
  imgSm: {
    type: String,
    required: true
  },
  trailer: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  limit: {
      type: Number
  },
  genre: {
    type: String,
    required: true
  }
}, {
  timestamps: true  
})

module.exports = mongoose.model("Movie", movieSchema);