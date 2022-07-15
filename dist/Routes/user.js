"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('express').Router();
const URL_1 = require("../Constants/URL");
const user_1 = require("../Controller/user");
Router.post(URL_1.loginUrl, user_1.userLogin);
Router.post("/register", user_1.userRegister);
module.exports = Router;
