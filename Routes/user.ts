import express from "express";
import {URL} from "../Constants/URL"
import {userLogin,userInfo} from "../Controller/user"
const Router=express.Router();

Router.post(URL.loginUrl,userLogin)
Router.get( URL.fetchUser,userInfo)
// Router.post("/register",userRegister)
export default Router;