"use strict";
const { model, Schema } = require("mongoose");
// const {ObjectId}=Schema.Types;
const userScehma = new Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    MovieList: [{
            type: String,
            ref: 'Movie'
        }]
}, { timestamps: true });
module.exports = model("User", userScehma);
