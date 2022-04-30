require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateJSON_WEB_TOKEN = (payload, expirationTime) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expirationTime ? `${expirationTime}d` : '30d'}); 
}

module.exports = {
    generateJSON_WEB_TOKEN
}