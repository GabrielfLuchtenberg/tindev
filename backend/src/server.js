const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost/tindev", { useNewUrlParser: true });

const { routes } = require("./routes");
const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(4000);
