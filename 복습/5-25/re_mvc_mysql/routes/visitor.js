const express = require("express");
const controller = require("../controller/visitor");
const routes = express.Router();

routes.get("/", controller.main);
routes.get("/list", controller.CgetVisitors);
module.exports = routes;
