const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://site:testpass@akfubflags.bdzfd.mongodb.net/AkfubFlags?retryWrites=true&w=majority";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  session({
    secret: "akfub-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// app.use(async (req, res, next) => {
//   res.locals.authorized = req.session.authorized;
// //   res.locals.user = req.session.user;

//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

const basicRoutes = require("./routes/main");
const authRoutes = require("./routes/auth");
const difficultyRoutes = require("./routes/difficulty");
const gameRoutes = require("./routes/game");

app.use(basicRoutes);
app.use(authRoutes);
app.use(difficultyRoutes);
app.use(gameRoutes);

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
