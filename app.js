const http = require("http");
const express = require("express");

const testRoutes = require("./routes/test");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(testRoutes);

const server = http.createServer(app);

server.listen(3000);