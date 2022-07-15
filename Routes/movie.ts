const Router=require('express').Router();
const {addMovie} =require('../Constants/URL');
const {newMovie}=require('../Controller/movie')
Router.post(addMovie,newMovie)


module.exports=Router;