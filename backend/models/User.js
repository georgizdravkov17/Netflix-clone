const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   firstName: {
       type: String,
       required: true,
       min: 3,
       max: 20
   },
   lastName: {
    type: String,
    required: true,
    min: 3,
    max: 20
},
 username: {
     type: String,
     required: true,
     min: 5,
     max: 30,
     unique: true
 },
 email: {
     type: String,
     required: true,
     unique: true
 },
 password: {
     type: String,
     required: true,
     min: 6
 },
 isAdmin: {
     type: Boolean,
     default: false
 },
 profilePicture: {
     type: String,
     default: ""
 }
}, 
{ timestamps: true })

module.exports = mongoose.model("User", userSchema);