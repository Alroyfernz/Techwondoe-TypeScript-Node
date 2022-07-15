"use strict";
const Router = require('express').Router();
const { addMovie, deleteMovie } = require('../Constants/URL');
const { newMovie, removeMovie } = require('../Controller/movie');
Router.post(addMovie, newMovie);
Router.delete(deleteMovie, removeMovie);
module.exports = Router;
