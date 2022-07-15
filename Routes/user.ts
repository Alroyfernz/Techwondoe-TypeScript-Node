const Router=require('express').Router();
import {loginUrl} from  "../Constants/URL";
import {userLogin,userRegister} from "../Controller/user"

Router.post(loginUrl,userLogin)
Router.post("/register",userRegister)
module.exports=Router;