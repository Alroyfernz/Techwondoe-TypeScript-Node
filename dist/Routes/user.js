"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const URL_1 = require("../Constants/URL");
const user_1 = require("../Controller/user");
const Router = express_1.default.Router();
Router.post(URL_1.URL.loginUrl, user_1.userLogin);
// Router.post("/register",userRegister)
module.exports = Router;
