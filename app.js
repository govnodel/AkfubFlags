const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/public"));

const basicRoutes = require("./routes/main");

app.use(basicRoutes);

app.listen(3000);
