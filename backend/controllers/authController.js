const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { registerUserSchema, loginUserSchema } = require("../validations/UserValidation");
const { getAllUsersAsArray } = require("./usersController");
const { generateJSON_WEB_TOKEN } = require("../helpers/generateToken");

const registerUser = async (req, res) => {

    const { firstName, lastName, username, email, password, profilePicture } = req.body;

  try{

    const isUserDataValid = await registerUserSchema.validate(req.body);

    if(!isUserDataValid){
        res.status(401).json({message: "Invalid user data!"});
    }

    const users = await getAllUsersAsArray();

    const isEmailFound = users.find(user => user.email === email);

    if(isEmailFound){
        res.status(401).json({message: "Email already exists!"});
    }

    const isUsernameFound = users.find(user => user.username === username);

    if(isUsernameFound){
        res.status(401).json({message: "Username already exists!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
        profilePicture: profilePicture ? profilePicture : ""
    })

    await newUser.save();

    const token = generateJSON_WEB_TOKEN({ id: newUser.id}, 30);

    // const { password, ...userInfo } = newUser._doc;

    res.json({
        user: newUser,
        token
    });
    
     
  } catch(err){
      res.status(401).json(err)
  }
}

const loginUser = async (req, res) => {

    const { email, password } = req.body;

   try{
     const isUserDataValid = await loginUserSchema.validate(req.body);

     if(!isUserDataValid){
         res.status(401).json({message: "Invalid user data!"});
     }

     const users = await getAllUsersAsArray();

     const foundUser = users.find(user => user.email === email);

     if(!foundUser){
         res.status(401).json({message: "Ivalid credentials!"});
     }

     const isPasswordValid = await bcrypt.compare(password, foundUser.password);

     if(!isPasswordValid){
        res.status(401).json({message: "Ivalid credentials!"});
     }

     const token = generateJSON_WEB_TOKEN({id: foundUser._id}, 10);

    //  const { password, ...userInfo } = foundUser._doc;

     res.json({
         user: foundUser,
         token
     });

   } catch(err){
       res.status(401).json(err);
   }
}

module.exports = {
    registerUser,
    loginUser
}