import express from "express";
import {URL} from '../Constants/URL';
import {newMovie,removeMovie,updateMovie}from '../Controller/movie';
const Router=express.Router();
Router.post(URL.addMovie,newMovie)
Router.delete(URL.deleteMovie,removeMovie)
Router.post(URL.updateMovie,updateMovie)
module.exports=Router;