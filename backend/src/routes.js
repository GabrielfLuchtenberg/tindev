const express = require("express");
const routes = express.Router();
const devController = require("./controllers/dev-controller");
const likesController = require("./controllers/like-controller");
const dislikesController = require("./controllers/dislike-controller");

routes.get("/devs", devController.index);
routes.post("/devs/:devId/likes", likesController.store);
routes.post("/devs/:devId/dislikes", dislikesController.store);

module.exports = {
  routes
};
