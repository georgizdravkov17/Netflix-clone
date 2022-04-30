const User = require("../models/User");

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(201).json(users);
    } catch(err){
        res.status(500).json(err);
    }
}

const getAllUsersAsArray = async (req, res) => {
    try{
        const users = await User.find();
        return users;
    } catch(err){
        console.err(err);
    }
}

const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(201).json(user);
    } catch(err){
      res.status(500).json(err)
    }
}

const deleteUser = async (req, res) => {
    try{
        const deletedUser = await User.deleteOne({_id: req.params.id});
        res.status(201).json({
            message: "Succesfully deleted user!",
            deleteUser
        });
    } catch(err){
       res.status(500).json(err);
    }
}

const updateUser = async (req, res) => {
    try{
       const updatedUser = await User.updateOne({ _id: req.params.id }, req.body);
       res.status(201).json({
           message: "Succesfully updated user!",
           updatedUser
       })
    } catch(err){
       res.status(500).json(err);
    }
}

module.exports = {
    getAllUsers,
    getAllUsersAsArray,
    getUserById,
    deleteUser,
    updateUser
}