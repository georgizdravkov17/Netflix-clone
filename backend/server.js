require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connectDB } = require("./config/db.js");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan());
app.use(express.urlencoded({extended: true}));

app.use(require("./routes/authRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/movies", require("./routes/moviesRoutes"));
app.use("/api/lists", require("./routes/listsRoutes"));

app.get("/", (req, res) => {
    res.send("<h1>This is exress server!</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`);
});