import express from "express";
import {URL} from "../Constants/URL"
import {userLogin} from "../Controller/user"
const Router=express.Router();

Router.post(URL.loginUrl,userLogin)
// Router.post("/register",userRegister)
export default Router;